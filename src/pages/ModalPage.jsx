// Сторінка з прикладом роботи з модалкою



import { useState } from "react";
import ModalWrapper from "../components/ModalWrapper/ModalWrapper";

const ModalPage = () =>{
    const [modal, setModal] = useState(false);
    const onClose = ()=>{
        setModal(false)
    }
    const onOpen = ()=>{
        setModal(true)
    }

    return (
        <>
        <button onClick={onOpen}>Modal</button>
        {modal && (<ModalWrapper onClose={onClose}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur inventore architecto facilis debitis ipsum ducimus hic placeat explicabo assumenda laborum veniam laboriosam quod eos similique ratione aut ad unde deserunt recusandae, cupiditate sunt maiores! Voluptate vitae quam quae aut neque iusto quasi eum nihil, ea ullam error, libero in aspernatur, facilis veritatis. Sint assumenda nesciunt illum possimus incidunt quas obcaecati voluptatum non odio, error aspernatur officiis praesentium corrupti facilis? Eaque nihil iste amet libero voluptatem, architecto asperiores dicta quaerat officia ipsam molestiae. Dolores autem qui consectetur suscipit reiciendis, eius odio labore quo recusandae officiis nulla! Ea excepturi at laboriosam omnis?
        </ModalWrapper>
        )}
        </>
    )
}
export default ModalPage;