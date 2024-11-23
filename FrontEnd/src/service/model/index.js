export const getModel = async (id) => {
    const token = localStorage.getItem("token");
    let params = {};
    if (id) {
        params.type = type;
    }
    let url = `${import.meta.env.VITE_API_URL}/carsModel` + new URLSearchParams(params);

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    const result = await response.json();
    return result;
};

export const getDetailModel = async (id) => {
    const token = localStorage.getItem("token");
    let url = `${import.meta.env.VITE_API_URL}/carsModel/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    const result = await response.json();
    return result;
};

export const createModel = async (request) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("type", request.type);
    formData.append("year", request.year);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/carsModel`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formData,
    });

    const result = await response.json();
    return result;
};

export const updateModel = async (id, request) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("type", request.type);
    formData.append("year", request.year);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/carsModel/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: formData,
    });

    const result = await response.json();
    return result;
};

export const deleteModel = async (id) => {
    const token = localStorage.getItem("token");
    let url = `${import.meta.env.VITE_API_URL}/carsModel/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "DELETE",
    });

    const result = await response.json();
    return result;
};