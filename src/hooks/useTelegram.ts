export const useTelegram = () => {
    const telegram_bot_id = process.env.REACT_APP_TELEGRAM_BOT_API_KEY;
    const chat_id = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    const sendForm = async (formData: Record<string, string>) => {
        const orderRuLayout: Record<string, keyof typeof formData> = {
            Имя: "name",
            Телефон: "phone",
            Дата: "date",
            Время: "time",
            Персоны: "persons",
            Комментарий: "comment",
        };

        let message = "НОВАЯ ЗАЯВКА НА БРОНЬ";
        for (let key in orderRuLayout) {
            orderRuLayout[key] = formData[orderRuLayout[key]];
            message += `\n${key}: ${orderRuLayout[key]}`;
        }

        const url = "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "cache-control": "no-cache",
            },
            body: JSON.stringify({
                chat_id: chat_id,
                text: message,
            }),
        };

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);

        return false;
    };

    return { sendForm };
};
