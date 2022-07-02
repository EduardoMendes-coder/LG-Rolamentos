import axios, { AxiosInstance } from "axios";

import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Employee } from "@/model/employee.model";

export class EmployeeClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/employee',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id: number) : Promise<Employee> {
        try {
            return (await this.axiosClient.get<Employee>(`/${id}`)).data
        } catch (error:any) {
            return Promise.reject(error.response)
        }
    }

	public async cadastrar(employee: Employee): Promise<void> {
		try {
			return (await this.axiosClient.post('/', employee))
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async editar(employee: Employee): Promise<void> {
		try {
			return (await this.axiosClient.put(`/${employee.id}`, employee)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

	public async desativar(employee: Employee): Promise<void> {
		try {
			return (await this.axiosClient.put(`/demit/${employee.id}`, employee)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

  public async findByFiltrosPaginado(): Promise<Employee> {
		try {

			return (await this.axiosClient.get(`/list/`)).data
		} catch (error:any) { 
			return Promise.reject(error.response) 
		}
	}
}
