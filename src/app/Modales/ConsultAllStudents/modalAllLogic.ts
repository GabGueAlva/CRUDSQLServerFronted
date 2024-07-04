import { useEffect, useState } from "react";

const ConsultAll = () => {
    

    const [id, setId] = useState('');
    const [alumnos, setAlumnos] = useState<Array<string>>([]);

    const fetchAll = async () => {
        try {
            const response = await fetch(`http://localhost:5000/`);
            if (!response.ok) {
                throw new Error('Error al obtener datos');
            }
            const data = await response.json();
            setAlumnos(Array.isArray(data) ? data : [data]);
        } catch (error) {
            console.log("Error")
        }
    };

    const handleSubmit = async (e:any) => {
        fetchAll()
    }

        return {
            alumnos,
            handleSubmit
        }
}

export default ConsultAll;