class Graph {
    constructor() {
        this.nodes = new vis.DataSet();
        this.edges = new vis.DataSet();
        this.adjacencyList = new Map();
        this.network = null;
        this.initNetwork();
    }

    initNetwork() {
        const container = document.getElementById('network');
        const data = {
            nodes: this.nodes,
            edges: this.edges,
        };
        const options = {};
        this.network = new vis.Network(container, data, options);
    }

    addNode(node) {
        this.nodes.add({ id: node, label: node });
        this.adjacencyList.set(node, []);
    }

    addEdge(from, to, weight) {
        this.edges.add({ from, to, label: String(weight), font: { align: 'horizontal' } });
        this.adjacencyList.get(from).push({ node: to, weight: parseInt(weight) });
        this.adjacencyList.get(to).push({ node: from, weight: parseInt(weight) }); // If the graph is undirected
    }

    dijkstra(start, end) {
        let distances = {};
        let prev = {};
        let pq = new PriorityQueue();

        this.nodes.forEach(node => {
            distances[node.id] = Infinity;
            prev[node.id] = null;
        });

        distances[start] = 0;
        pq.enqueue(start, 0);

        while (!pq.isEmpty()) {
            let minNode = pq.dequeue().element;

            if (minNode === end) break;

            let neighbors = this.adjacencyList.get(minNode);
            neighbors.forEach(neighbor => {
                let alt = distances[minNode] + neighbor.weight;
                if (alt < distances[neighbor.node]) {
                    distances[neighbor.node] = alt;
                    prev[neighbor.node] = minNode;
                    pq.enqueue(neighbor.node, alt);
                }
            });
        }

        let path = [];
        let u = end;
        while (prev[u] !== null) {
            path.unshift(u);
            u = prev[u];
        }
        if (path.length) {
            path.unshift(start);
            return path.join(' -> ');
        } else {
            return 'No path found';
        }
    }
}

class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    enqueue(element, priority) {
        const node = { element, priority };
        if (this.isEmpty()) {
            this.collection.push(node);
        } else {
            let added = false;
            for (let i = 0; i < this.collection.length; i++) {
                if (node.priority < this.collection[i].priority) {
                    this.collection.splice(i, 0, node);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(node);
            }
        }
    }

    dequeue() {
        return this.collection.shift();
    }

    isEmpty() {
        return this.collection.length === 0;
    }
}

const graph = new Graph();
const nodeNameInput = document.getElementById('node-name');
const edgeFromSelect = document.getElementById('edge-from');
const edgeToSelect = document.getElementById('edge-to');
const edgeWeightInput = document.getElementById('edge-weight');
const startNodeSelect = document.getElementById('start-node');
const endNodeSelect = document.getElementById('end-node');
const outputDiv = document.getElementById('output');

function addNode() {
    const nodeName = nodeNameInput.value.trim();
    if (nodeName && !graph.nodes.get(nodeName)) {
        graph.addNode(nodeName);
        updateNodeSelects();
        nodeNameInput.value = '';
    }
}

function addEdge() {
    const from = edgeFromSelect.value;
    const to = edgeToSelect.value;
    const weight = edgeWeightInput.value;
    if (from && to && weight) {
        graph.addEdge(from, to, weight);
        edgeWeightInput.value = '1';
    }
}

function findShortestPath() {
    const start = startNodeSelect.value;
    const end = endNodeSelect.value;
    if (start && end) {
        const path = graph.dijkstra(start, end);
        outputDiv.textContent = `Shortest Path: ${path}`;
    }
}

function updateNodeSelects() {
    const selects = [edgeFromSelect, edgeToSelect, startNodeSelect, endNodeSelect];
    selects.forEach(select => {
        select.innerHTML = '';
        graph.nodes.forEach(node => {
            const option = document.createElement('option');
            option.value = node.id;
            option.textContent = node.label;
            select.appendChild(option);
        });
    });
}

document.addEventListener('DOMContentLoaded', updateNodeSelects);

