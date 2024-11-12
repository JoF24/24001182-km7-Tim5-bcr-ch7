export const getFuels = async (type) => {
    const token = localStorage.getItem("token");
    let params = {};
    if (type) {
        params.type = type;
    }
    let url = `${import.meta.env.VITE_API_URL}/carsFuel` + new URLSearchParams(params);

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    const result = await response.json();
    return result;
};

export const getDetailFuel = async (id) => {
    const token = localStorage.getItem("token");
    let url = `${import.meta.env.VITE_API_URL}/carsFuel/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "GET",
    });

    const result = await response.json();
    return result;
};

export const createFuel = async (request) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("type", request.type);
    formData.append("price", request.price);
    formData.append("octan_rating", request.octan_rating);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/carsFuel`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formData,
    });

    const result = await response.json();
    return result;
};

export const updateFuel = async (id, request) => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("type", request.type);
    formData.append("price", request.price);
    formData.append("octan_rating", request.octan_rating);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/carsFuel/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "PUT",
        body: formData,
    });

    const result = await response.json();
    return result;
};

export const deleteFuel = async (id) => {
    const token = localStorage.getItem("token");
    let url = `${import.meta.env.VITE_API_URL}/carsFuel/${id}`;

    const response = await fetch(url, {
        headers: {
            authorization: `Bearer ${token}`,
        },
        method: "DELETE",
    });

    const result = await response.json();
    return result;
};