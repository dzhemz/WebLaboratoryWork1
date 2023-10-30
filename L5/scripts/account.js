let accountHTML = `
    <main class="container-fluid">
        <aside class="sidebar"></aside>
        <section id="accountInfo" class="container shadow-sm p-3 mb-3 bg-body rounded">
            <h2 class="h3">Ваш аккаунт</h2>
            <p class="fs-4">Василий Петров</p>
            <p class="fs-6">Номер телефона 8 (904) 637-81-92</p>
            <p class="fs-6">Электронная почта vaspet@mail.run</p>
            <p class="fs-6">Баланс 575.000 ₽</p>
        </section>

        <section id="ordersInfo" class="container shadow-sm p-3 mb-3 bg-body rounded">
            <h2 class="h3">Ваши заказы</h2>
            
            <!-- <p class="fs-6"> У вас нет заказов</p> -->
            <p></p>
            </section>
        <aside class="sidebar"></aside>
    </main>
`;

const addOrdersToDisplay = (orders) => {
    orders.map((order) => {

    });
}

export {accountHTML};