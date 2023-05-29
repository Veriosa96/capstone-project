import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClasses, bookClass } from 'actions/classActions';

const Calendar = () => {
const [selectedDate, setSelectedDate] = useState(null);
const classes = useSelector(state => state.classes);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(fetchClasses());
}, [dispatch]);

const handleDateClick = date => {
    setSelectedDate(date);
};

const handleClassBooking = classId => {
    dispatch(bookClass(classId));
};

return (
    <div>
    <h1>Calendario</h1>
    <div>
        {classes.map(classItem => (
        <div key={classItem.id}>
            <p>Data: {classItem.date}</p>
            <p>Orario: {classItem.time}</p>
            <p>Posti disponibili: {classItem.availableSpots}</p>
            <button
            onClick={() => handleClassBooking(classItem.id)}
            disabled={!selectedDate || classItem.availableSpots === 0}
            >
            Prenota
            </button>
        </div>
        ))}
    </div>
    </div>
);
};

export default Calendar;