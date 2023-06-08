import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import DishesSlider from "../components/views/mainPage/DishesSlider";
import OrderTable from "../components/views/mainPage/OrderTable";
import VideoPreview from "../components/views/mainPage/VideoPreview";
import BestDishes from "../components/views/mainPage/BestDishes";

const Main = () => {
    const sendMessage = async () => {
        try {
            const docRef = await addDoc(collection(db, "bookings"), {
                name: "Санек",
                phone: "89999999999",
                date_and_time: "8 июня 2023 18:00",
                comment: "по кайфу",
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };
    const getMessage = async () => {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    };

    return (
        <div className="mx-auto h-[4000px]">
            {/* <button className="absolute top-0 left-0 z-30 p-20 bg-white text-black" onClick={sendMessage}>
                send
            </button>
            <button className="absolute top-0 left-[300px] z-30 p-20 bg-white text-black" onClick={getMessage}>
                get
            </button> */}
            <VideoPreview />
            <BestDishes />
            <DishesSlider />
            <OrderTable />
        </div>
    );
};

export default Main;
