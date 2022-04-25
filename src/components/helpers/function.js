const shorten = (title) => {
    const splitedTitle = title.splite(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle
}