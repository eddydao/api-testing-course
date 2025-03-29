var template = `
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 20px;
        background-color: #f5f5f5;
    }
    
    h1 {
        color: #333;
        text-align: center;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        background-color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    
    th, td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    
    th {
        background-color: #4CAF50;
        color: white;
        font-weight: bold;
    }
    
    tr:hover {
        background-color: #f1f1f1;
    }
    
    tr:nth-child(even) {
        background-color: #f9f9f9;
    }
</style>
<table>
    <thead>
        <tr>
            <th>Order ID</th>
            <th>Customer name</th>
            <th>Total amount</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        {{#each orders}}
        <tr>
            <td>{{order_id}}</td>
            <td>{{customer.name}}</td>
            <td>{{total_amount}}</td>
            <td>{{status}}</td>
        </tr>
        {{/each}}
    </tbody>
</table>
`;

const data = pm.response.json();

pm.visualizer.set(template, {orders: pm.response.json()});