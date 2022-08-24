import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export default function post() {

    const router = useRouter()
    const [Employee_id, setEmployee_id] = useState("");
    const [Employee_name, setEmployee_name] = useState("");
    const [Employee_username, setEmployee_username] = useState("");
    const [Employee_password, setEmployee_password] = useState("");

    const addEmployee = () => {
        Axios.post('http://localhost:8080/employees', {
          employee_id: Employee_id,
          employee_name: Employee_name,
          employee_username: Employee_username,
          employee_password: Employee_password
      })
      .then(function (response) {
        console.log(response);

        Swal.fire({
          icon: 'success',
          title: '<h3>บันทึกข้อมูลเรียบร้อยแล้ว</h3>',
          showConfirmButton: false,
          timer: 2000
        }).then(function () {
        router.push('/employee');
        });
       
      })
      /*.catch(function (error) {
        console.log(error);
        Swal.fire({
          icon: 'warning',
          title: '<h3>ไม่สามารถบันทึกข้อมูลได้</h3>',
          showConfirmButton: false,
          timer: 2000
        }).then(function () {
        router.push('/employee');
        });
      });
     */
      }

  return (
    <div>
<>
       <br />
       <div className="container">
      <div className="card">
  <div className="card-header">
    กรอกข้อมูล
  </div>
  <div className="card-body">
<table id="example2" className="table table-bordered table-hover table-responsive" border="1"></table>
<form action="/" method="post">
        <input type="number" className="form-control" placeholder="No." onChange={(e) => { setEmployee_id(e.target.value) }}/>
        <br />
        <input type="text" className="form-control" placeholder="ชื่อ-นามสกุล" onChange={(e) => { setEmployee_name(e.target.value) }}/>
        <br />
        <input type="text" className="form-control" placeholder="ชื่อผู้ใช้" onChange={(e) => { setEmployee_username(e.target.value) }}/>
        <br />
        <input type="text" className="form-control" placeholder="รหัสผ่าน" onChange={(e) => { setEmployee_password(e.target.value) }}/>
        <br />
        <button type="button" className="btn btn-success" onClick={addEmployee}>บันทึก</button>
        </form>
</div>
    </div>
    </div>
    </>

    </div>
    
  )
}