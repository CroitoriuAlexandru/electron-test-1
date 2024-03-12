// const BACKEND_URL = "http://127.0.0.1:8000/";
// const BACKEND_URL = "http://192.168.2.70:8000/";
const BACKEND_URL = "https://backend-for-browser-production.up.railway.app/";

const endpoints = {
    home_page: {
        add_bg_image: `${BACKEND_URL}api/homePage/add_background_image/`,
    },
    company: {
        setCompany: `${BACKEND_URL}api/organization/set_organization/`, // POST
        set_cod_caen: `${BACKEND_URL}api/organization/set_caen_code/`, // POST
        set_nr_employees: `${BACKEND_URL}api/organization/set_nr_employees/`, // POST
        generate_departments: `${BACKEND_URL}api/organization/generate_departments/`, // GET
        set_company_departments: `${BACKEND_URL}api/organization/set_company_departments/`, // POST
        get_organigram_info: `${BACKEND_URL}api/organization/get_organigram_info/`,
        set_employee_department_and_supervizer: `${BACKEND_URL}api/organization/set_employee_department_and_supervizer/`,
        get_user_employees_from_google: `${BACKEND_URL}api/organization/get_user_employees_from_google/`,
    },
    login: {
        basic: {
            login: `${BACKEND_URL}api/auth/regular-login/`,
            updateToken: `${BACKEND_URL}api/auth/token/refresh/`,
        },
        google: `${BACKEND_URL}api/auth/google/`,
    },
};


module.exports = endpoints