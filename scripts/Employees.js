import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {

                    const employeeOrders = orders.filter(  // <--- Go to YouTube and search "javascript array filter"
                        (order) => (order.employeeId === employee.id) 
                    )
                    

                    window.alert(` ${employee.name} sold ${employeeOrders.length} products `)
                }
            }
        }
    }
)




export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

