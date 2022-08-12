function App() {
   

    function MyForm() {
     return (
        <form>
        <label> Choose User:</label>
        <select name="users" id="users">
          <option value='dr'>Doctors</option>
          <option value='lab'>Lab</option>
          <option value='patient'>Patient</option>
        </select>
        <p></p>
<label>Enter your name:
<input type="text" />
</label>
<p></p>
<label>Enter your Password:
<input type="password"  style={{color:"red", width:"500px"}} />
</label>
<p></p>
<br></br>
<input type='submit' />

</form>
     )
   }
   ReactDOM.render(<MyForm />, document.getElementById('root'));
}