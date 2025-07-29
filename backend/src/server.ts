import app from "./app"

const PORT = 8000;

async function main(){
    try {
        app.listen(PORT, ()=>{
            console.log(`Minimal library management system is running on : ${PORT}`)
        })
    } catch (error) {
        console.error("Failed to connect to MongoDB : ", error)
    }
}

main()