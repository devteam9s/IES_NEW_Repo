import React from 'react';
import './Report.scss';
const Reports = () => {
  return (
    <div className='report'>
        <p className='title'>Generate Reports</p>
        <div className="form">
            <form action="">
                <label htmlFor="fname" className='fname'>Select System:</label><br/>
                <select name="select" id="select" className="select">
              <option selected>Select Site</option> 
              <option value="1">Site1</option>
              <option value="2">Site2</option>
              <option value="3">Site3</option>
              <option value="4">Site4</option>
            </select> <br/> <br/>
            <label htmlFor="sname"className='sname'>Select Pit:</label><br/>
            <select name="select" id="select" className="select">
            <option selected>Select Pit</option> 
              <option value="1">Pit1</option>
              <option value="2">Pit2</option>
              <option value="3">Pit3</option>
              <option value="4">Pit4</option>
            </select> <br/> <br/>
            <label for="date"className='date'>From Date:</label><br />
            <input type="date" id="birthday" className="input"></input><br/><br />
            <label for="date"className='date'>To Date:</label><br />
            <input type="date" id="birthday" className="input"></input><br /><br /><br /><br />
            <div>
            <input type="submit" value="Submit"className='submit'></input>
            </div>
            </form>
        </div> 
    </div> 
  )
}

export default Reports