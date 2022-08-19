import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private ds: DataService) { }

  users: any[] = [];

  ngOnInit(): void {
    this.ds.fetchUsers().subscribe(this.apiSuccess, this.apiError, this.apiComplete);
  }

  apiSuccess(res: any) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  apiError(e: any) {
    Swal.fire('', e.message, 'error')
  }

  apiComplete(): void {
    console.log('API Call Complete')
  }

}
