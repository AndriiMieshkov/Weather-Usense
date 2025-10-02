const formatTime = (date) => {
    const newDate = new Date(date * 1000);
    const hours = String(newDate.getHours()).padStart(2, '0');
    const minutes = String(newDate.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

export default formatTime;