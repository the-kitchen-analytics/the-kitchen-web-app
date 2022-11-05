const parseFirebaseDate = (firebasDate) => {
    return new Date(firebasDate.seconds * 1000);
}

export default parseFirebaseDate;