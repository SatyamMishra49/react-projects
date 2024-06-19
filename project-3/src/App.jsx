import Card from "./components/Card"

export default function App() {
  const myObj = {
    name:"Satyam",
    age:"23",
    city:"bangalore"
  }
  let newArr = [1,2,3,4,5,6]
  return (
    <>
    {/* <Card username="sam" place="hyderabad" myArr={newArr}></Card>
    <Card username="max" place="bangalore"></Card> */}
    <Card myObj={myObj}></Card>
    </>
  )
}