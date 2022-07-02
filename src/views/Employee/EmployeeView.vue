<template>
  <h1 class="has-text-weight-bold is-size-2 mb-5">Consulta de Funcionário</h1>
  <div
    class="buttons is-flex is-flex-direction-column is-justify-content-space-around m-2"
  >
    <router-link class="btn-cad" to="/secretaria/cadastrar"
      ><button class="btn-cadastrar mb-4">
        Cadastrar Funcionário
      </button></router-link
    >
  </div>
  <div class="list is-flex is-justify-content-center">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Dt.</th>
          <th>ID</th>
          <th>Status</th>
          <th>Nome</th>
          <th>Contrado em</th>
          <th>Sálario</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in employeeList" :key="item.id">
          <th>
            <button class="btn-detail">i</button>
          </th>
          <th>{{ item.id }}</th>

          <th>
            <span v-if="item.name" class="tag is-success"> Ativo </span>
            <span v-if="item.name" class="tag is-danger"> Inativo </span>
          </th>

          <th>{{ item.name }}</th>
          <th>{{ item.hiredAt }}</th>
          <th>{{ item.salary }}</th>
          <td>
            <button class="btn-edit">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Employee } from "@/model/employee.model";
import { EmployeeClient } from "@/client/employee.client";

export default class ExployeeView extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Employee> = new PageResponse();
  public employeeList: Employee[] = [];
  public employee: Employee = new Employee();
  private employeeClient!: EmployeeClient;
  public mounted(): void {
    this.employeeClient = new EmployeeClient();
    this.listarEmployee();
  }
  private listarEmployee(): void {
    this.employeeClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.employeeList = this.pageResponse.content;
      },
      (error) => console.log(error)
    );
  }
}
</script>

<style scoped lang="scss">
html {
  background-color: #f2f2f2;
}
.table {
  background-color: #f2f2f2;
  margin-top: 30px;
  font-size: 20px;
}
.table th {
  padding: 15px;
  text-align: center;
}
.table td {
  padding: 15px;
  text-align: center;
}
.btn-cad {
  width: 100%;
}
.btn-cadastrar {
  width: 60%;
  font-size: 30px;
  background-color: #0074ff;
  border-color: #0074ff;
  border-radius: 20px;
  border-width: 5px;
  color: white;
  font-weight: bold;
  padding: 10px;
}
.btn-cadastrar:hover {
  background-color: #00aeff;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #00aeff;
  border-width: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}
.btn-search {
  width: 60%;
  font-size: 30px;
  background-color: #001780;
  border-color: #001780;
  border-radius: 20px;
  border-width: 5px;
  color: white;
  font-weight: bold;
  padding: 10px;
}
.btn-search:hover {
  background-color: #0022bd;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #0022bd;
  border-width: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}
.btn-edit {
  font-size: 17px;
  background-color: #00a983;
  border-color: #00a983;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 10px;
}
.btn-edit:hover {
  background-color: #00cb9d;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #00cb9d;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}
.btn-delet {
  font-size: 17px;
  background-color: #b20000;
  border-color: #b20000;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 10px;
}
.btn-delet:hover {
  background-color: #cd0000;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #cd0000;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}
.btn-detail {
  font-size: 17px;
  background-color: #f2f2f2;
  border-color: #0093ff;
  border-width: 3px;
  border-radius: 100px;
  color: #0093ff;
  font-weight: bold;
  width: 30px;
}
.btn-detail:hover {
  background-color: #f2f2f2;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #00c1ff;
  color: #00c1ff;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}
</style>
