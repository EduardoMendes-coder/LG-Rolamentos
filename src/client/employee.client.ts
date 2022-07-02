import axios, { AxiosInstance } from "axios";

import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";
import { Employee } from "@/model/employee.model";

export class EmployeeClient {

    private axiosClient: AxiosInstance;

    constructor() {
        this.axiosClient = axios.create({
            baseURL: 'https://lg-rolamentos-api.herokuapp.com',
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
			return (await this.axiosClient.put(`/desativar/${employee.id}`, employee)).data
		} catch (error:any) {
			return Promise.reject(error.response)
		}
	}

  public async findByFiltrosPaginado(pageRequest: PageRequest): Promise<PageResponse<Employee>> {
		try {
			let requestPath = ''

			requestPath += `?page=${pageRequest.currentPage}`
			requestPath += `&size=${pageRequest.pageSize}`
			requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField},${pageRequest.direction}`

			return (await this.axiosClient.get<PageResponse<Employee>>(requestPath, { params: { filtros: pageRequest.filter } })).data
		} catch (error:any) { 
			return Promise.reject(error.response) 
		}
	}


}
