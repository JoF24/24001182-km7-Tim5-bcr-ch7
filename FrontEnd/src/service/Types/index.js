export const getType = async (id) => {
    const token = localStorage.getItem("token");
    let params;
    if (id) {
        params.id = id;
    }
    let url =
        `${import.meta.env.VITE_API_URL}/carsType` +
        new URLSearchParams(params);

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    const result = await response.json();
    return result;
};

export const getDetailType = async (id) => {
    const token = localStorage.getItem("token");

    let url = `${import.meta.env.VITE_API_URL}/carsType/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    // get data
    const result = await response.json();
    return result;
};

export const createType = async (request) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("type", request.type);
    formData.append("description", request.description);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/carsType`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formData,
    });

    // get the data if fetching succeed!
    const result = await response.json();
    return result;
};

export const updateType = async (id, request) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("type", request.type);
    formData.append("description", request.description);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/carsType/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: formData,
    });

    // get the data if fetching succeed!
    const result = await response.json();
    return result;
};

export const deleteType = async (id) => {
    const token = localStorage.getItem("token");

    let url = `${import.meta.env.VITE_API_URL}/carsType/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "DELETE",
    });

    // get data
    const result = await response.json();
    return result;
};