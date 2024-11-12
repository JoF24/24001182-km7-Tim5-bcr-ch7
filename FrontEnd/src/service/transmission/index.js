export const getTransmissions = async (type) => {
    const token = localStorage.getItem("token");
    let params = {};
    if (type) {
        params.type = type;
    }
    let url = `${import.meta.env.VITE_API_URL}/carsTransmission?` + new URLSearchParams(params);

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    const result = await response.json();
    return result;
};

export const getDetailTransmission = async (id) => {
    const token = localStorage.getItem("token");
    let url = `${import.meta.env.VITE_API_URL}/carsTransmission/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    const result = await response.json();
    return result;
};

export const createTransmission = async (request) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("type", request.type);
    formData.append("number_of_gears", request.number_of_gears);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/carsTransmission`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formData,
    });

    const result = await response.json();
    return result;
};

export const updateTransmission = async (id, request) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("type", request.type);
    formData.append("number_of_gears", request.number_of_gears);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/carsTransmission/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: formData,
    });

    const result = await response.json();
    return result;
};

export const deleteTransmission = async (id) => {
    const token = localStorage.getItem("token");
    let url = `${import.meta.env.VITE_API_URL}/carsTransmission/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "DELETE",
    });

    const result = await response.json();
    return result;
};
