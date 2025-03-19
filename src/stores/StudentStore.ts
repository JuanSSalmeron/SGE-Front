import { DeleteStudent, GetStudent, GetStudents, PostStudent, PutStudent } from '@/api/services/StudentsServices';
import type { IStudent } from '@/types/Students';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStudentStore = defineStore('Students', () => {
  const studentsList = ref<IStudent[]>([]);
  const student = ref<IStudent>({} as IStudent);

  async function GetStoreStudents(){
    const response = await GetStudents();

    if(response?.success === true){
      studentsList.value = response.data;
    }

    return response;
  }

  async function PostStoreStudent(student: IStudent){
    const response = await PostStudent(student);

    if(response?.success === true){
      await GetStoreStudents();
    }

    return response;
  }

  async function GetStoreStudent(id: number){
    const response = await GetStudent(id);

    if(response?.success === true){
      student.value = response.data;
    }
    return response;
  }

  async function PutStoreStudent(student: IStudent){
    const response = await PutStudent(student);

    if (response?.success === true){
      await GetStoreStudents();
    }

    return response;
  }

  async function DeleteStoreStudent(id: number){
    const response = await DeleteStudent(id);

    if (response?.success === true){
      await GetStoreStudents();
    }
    return response;
  }

  return { GetStoreStudents, PostStoreStudent, GetStoreStudent, PutStoreStudent, DeleteStoreStudent, studentsList, student };
});
