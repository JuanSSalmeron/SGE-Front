import { usePersonStore } from '@/stores/PersonStore';
import { useSchoolYearStore } from '@/stores/SchoolYearStore';
import { useStudentStore } from '@/stores/StudentStore';
import { usePeriodsStore } from '@/stores/PeriodsStore'
const schoolYearStore = useSchoolYearStore();
const personStore = usePersonStore()
const studentStore = useStudentStore();
const periodsStore = usePeriodsStore();

export const GetPersons = async () => {
  return await personStore.GetStorePersons();
};

export const GetSchoolYear = async () => {
  return await schoolYearStore.GetStoreSchoolYears();
};

export const GetStudents = async () => {
  return await studentStore.GetStoreStudents();
};

export const GetPeriods = async () => {
  return await periodsStore.GetStorePeriods();
};
