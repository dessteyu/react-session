const baseURL = "http://127.0.0.1:5500/src/data/";

export const getUsers = async () => await fetch(`${baseURL}users.json`);
export const getTeachers = async () => await fetch(`${baseURL}teachers.json`);
export const getStduents = async () => await fetch(`${baseURL}students.json`);