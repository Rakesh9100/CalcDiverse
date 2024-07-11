var budgetController = (function () {

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function () {
        return this.percentage;
    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function (type) { // type ==> inc or exp
        var sum = 0;
        data.allItems[type].forEach(function (current) {
            sum += current.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {

        addItem: function (type, desc, val) {
            var newItem, ID;

            if (data.allItems[type].length > 0) { // Create new ID
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if (type === "exp") { // Create new item
                newItem = new Expense(ID, desc, val);
            } else if (type === "inc") {
                newItem = new Income(ID, desc, val);
            }

            data.allItems[type].push(newItem); // Push newItem into data structure
            return newItem; // Return newItem
        },

        deleteItem: function (type, id) {
            var ids, index;
            ids = data.allItems[type].map(function (current) { // map returns a new array
                return current.id;
            });
            index = ids.indexOf(id);
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function () {
            calculateTotal("exp"); // Calculate total expenses
            calculateTotal("inc"); // Calculate total income
            data.budget = data.totals.inc - data.totals.exp; // Calculate budget: inc - exp
            if (data.totals.inc > 0) { // Calculate percentage of income that I spent
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        calculatePercentages: function () {
            data.allItems.exp.forEach(function (current) { // Calculate percentages for each item
                current.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function () {
            var allPercentages = data.allItems.exp.map(function (current) {
                return current.getPercentage();
            });
            return allPercentages;
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

        testing: function () {
            console.log(data);
        }
    };

})();


/**********************
		UI CONTROLLER
**********************/

var UIController = (function () {

    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputButton: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income-value",
        expensesLabel: ".budget__expenses-value",
        percentageLabel: ".budget__expenses-percentage",
        listContainer: ".list",
        expensesPercLabel: ".item__percentage",
        dateLabel: ".budget__title-month"
    };

    var formatNumber = function (num, type) {
        var numSplit, int, decimal, type;

        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split(".");

        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3); // input = 23100 ==> output 23,100
        }
        decimal = numSplit[1];

        return (type === "exp" ? "-" : "+") + " " + int + "." + decimal;
    };

    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    return {
        getInput: function () {
            return { // Method for returning the 3 inputs from the UI
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function (obj, type) { // obj is newItem
            var html, newHtml, element;

            if (type === "inc") { // Create HTML string with placeholder text
                element = DOMstrings.incomeContainer;
                html = '<div class="row item" id="inc-%id%"> <div class="col item__description">%description%</div> <div class="col text-right item__value">%value%</div> <div class="col-1 text-right item__delete"> <button class="btn item__delete-btn"> <i class="fas fa-trash"></i> </button> </div> </div>';
            } else if (type === "exp") {
                element = DOMstrings.expensesContainer;
                html = '<div class="row item" id="exp-%id%"> <div class="col item__description">%description%</div> <div class="col text-right item__value">%value%</div> <div class="col-1 text-center item__percentage">21%</div> <div class="col-1 text-right item__delete"> <button class="btn item__delete-btn"> <i class="fas fa-trash"></i> </button> </div> </div>';
            }

            newHtml = html.replace("%id%", obj.id); // Replace placeholder with data
            newHtml = newHtml.replace("%description%", obj.description);
            newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));

            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml); // Insert HTML into the DOM

        },

        deleteListItem: function (selectorID) {
            var element = document.getElementById(selectorID);
            element.parentNode.removeChild(element);
        },

        clearFields: function () {
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMstrings.inputDescription + ", " + DOMstrings.inputValue); // "querySelectorAll" returns a node list, not and array
            fieldsArr = Array.prototype.slice.call(fields); // Make "slice" think that this is an array and not a list
            fieldsArr.forEach(function (current, index, array) { // Clear the fields
                current.value = "";
            });
            fieldsArr[0].focus(); // Focus goes back to the first element ==> item description
        },

        displayBudget: function (obj) {
            var type;
            obj.budget > 0 ? type = "inc" : type = "exp";
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, "inc");
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, "exp");
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = "---";
            }
        },

        displayPercentages: function (percentages) {
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + "%";
                } else {
                    current.textContent = "---";
                }
            });
        },

        displayDate: function () {
            var now, month, months, year;
            now = new Date();
            month = now.getMonth();
            months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + " " + year;
        },

        changedType: function () {
            var fields = document.querySelectorAll(
                DOMstrings.inputType + "," +
                DOMstrings.inputDescription + "," +
                DOMstrings.inputValue
            );

            nodeListForEach(fields, function (current) {
                current.classList.toggle("red-focus");
            });

            document.querySelector(DOMstrings.inputButton).classList.toggle("red");
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };

})();


/**********************
		APP CONTROLLER
**********************/

var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputButton).addEventListener("click", ctrlAddItem);
        document.addEventListener("keypress", function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.listContainer).addEventListener("click", ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener("change", UICtrl.changedType);
    };

    var updateBudget = function () {
        budgetController.calculateBudget(); // 1. Calculate budget
        var budget = budgetController.getBudget(); // 2. Return budget
        UICtrl.displayBudget(budget); // 3. Display budget on UICtrl
    };

    var updatePercentages = function () {
        budgetCtrl.calculatePercentages(); // 1. Calculate percentages	
        var percentages = budgetCtrl.getPercentages(); // 2. Read percentages from budgetCtrl
        UICtrl.displayPercentages(percentages); // 3. Update UI with new percentages
    };

    var ctrlAddItem = function () {
        var input, newItem;

        input = UICtrl.getInput(); // 1. Get input data
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { // Check if description is empty and the value is a number
            newItem = budgetCtrl.addItem(input.type, input.description, input.value); // 2. Add item to budgetCtrl
            UICtrl.addListItem(newItem, input.type); // 3. Add item to UICtrl
            UICtrl.clearFields(); // 4. Clear fields
            updateBudget(); // 5. Calculate and update budget
            updatePercentages(); // 6. Calculate and update percentages
        }
    };

    var ctrlDeleteItem = function (e) {
        var itemID, splitID, type, id;

        itemID = e.target.parentNode.parentNode.parentNode.id;
        if (itemID) {
            splitID = itemID.split("-");
            type = splitID[0];
            id = parseInt(splitID[1]);
            budgetController.deleteItem(type, id); // 1. Delete item from data structure
            UICtrl.deleteListItem(itemID); // 2. Delete item from the UI
            updateBudget(); // 3. Update and show new budget
            updatePercentages(); // 4. Calculate and update percentages
        }

    };

    return {
        init: function () {
            console.log("App has started!");
            UICtrl.displayDate();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();
