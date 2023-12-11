import HistoriaClinica from "../models/historialMedico";


const createHistoriaClinica = async (req, res) => {
    const HistoriaClinicaData = req.body;
    try {
        const historiaClinica = new HistoriaClinica(HistoriaClinicaData);
        await historiaClinica.save();
        res.status(201).json(historiaClinica);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getHistoriaClinica = async (req, res) => {
    try {
        const historiasMedicas = await HistoriaClinica.find();
        res.status(200).json(historiasMedicas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getHistoriaClinicaId = async (req, res) => {
    const historiaClinicaId = req.params.id;
    try {
        const historiaClinica = await HistoriaClinica.findById(historiaClinicaId);
        if (historiaClinica) {
            res.status(200).json(historiaClinica);
        } else {
            res.status(404).json({ message: 'Historia clínica no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateHistoriaClinica = async (req, res) => {
    const historiaClinicaId = req.params.id;
    const updatedHistoriaClinicaData = req.body;
    try {
        const historiaClinica = await HistoriaClinica.findByIdAndUpdate(historiaClinicaId, updatedHistoriaClinicaData, { new: true });
        if (historiaClinica) {
            res.status(200).json(historiaClinica);
        } else {
            res.status(404).json({ message: 'Historia clínica no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteHistoriaClinica = async (req, res) => {
    const historiaClinicaId = req.params.id;
    try {
        const historiaClinica = await HistoriaClinica.findByIdAndDelete(historiaClinicaId);
        if (historiaClinica) {
            res.status(200).json({ message: 'Historia clínica eliminada exitosamente' });
        } else {
            res.status(404).json({ message: 'Historia clínica no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export {    createHistoriaClinica,
            getHistoriaClinica,
            getHistoriaClinicaId, 
            updateHistoriaClinica, 
            deleteHistoriaClinica };
