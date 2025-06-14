import './Reg.css'
function Reg() {
  return (
    <div className="Registration">
      <input type="text" placeholder="სახელი" />
      <input type="text" placeholder="გვარი"/>
      <input type="number" placeholder="ასაკი"/>
      <input type="mail" placeholder="მეილი"/>
      <div><button className='Secbut'>რეგისტრაცია</button></div>
    </div>
  );
}
export default Reg;