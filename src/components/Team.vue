<template>
    <div class="sub-container">
        <div class="team">
            <header class="header center">
                <h1>Meet Our Team</h1>
                <h3>
                    <b>MAADD'S Enterprises'</b> team comprises of dedicated, creative, resourceful and hard working marketing experts in the bicol region.
                </h3>
            </header>
            <div class="content f-row">
                <div class="team-member first" v-in-viewport>
                    <div class="member-avatar background-image aira"></div>
                    <div class="member-info">
                        <h3>Aira Mae Camposano</h3>
                        <p>Human Resource Manager</p>
                        <p>+639152044704</p>
                    </div>
                </div>
                <div class="team-member second" v-in-viewport>
                    <div class="member-avatar background-image amy"></div>
                    <div class="member-info">
                        <h3>Amy Amaro</h3>
                        <p>Marketing Manager</p>
                        <p>+639152044704</p>
                    </div>
                </div>
                <div class="team-member third" v-in-viewport>
                    <div class="member-avatar background-image darenz"></div>
                    <div class="member-info">
                        <h3>Darenz Rodriguez</h3>
                        <p>General Manager</p>
                        <p>+639052371439</p>
                    </div>
                </div>
                <div class="team-member fourth" v-in-viewport>
                    <div class="member-avatar background-image dann"></div>
                    <div class="member-info">
                        <h3>Dann Eric Pelimiano</h3>
                        <p>Production Manager</p>
                        <p>+639152044704</p>
                    </div>
                </div>
                <div class="team-member fifth" v-in-viewport>
                    <div class="member-avatar background-image cristina"></div>
                    <div class="member-info">
                        <h3>Ma Cristina Tan</h3>
                        <p>Financial Manager</p>
                        <p>+639152044704</p>
                    </div>
                </div>
            </div>
            <div class="team-objectives f-row">
                <div class="long-term">
                    <header class="header center">
                        <h1>Long Term Objectives</h1>
                    </header>
                    <ol>
                        <li>
                            <p>To promote, protect and maintain our image at all time.</p>
                        </li>
                        <li>
                            <p>To become one of the best yema businesses in Naga City.</p>
                        </li>
                        <li>
                            <p>To expand our yema business outside Naga City. </p>
                        </li>
                        <li>
                            <p>To gain market shares and earn profit more than competitors.</p>
                        </li>
                    </ol>
                </div>
                <div class="short-term">
                    <header class="header center">
                        <h1>Short Term Objectives</h1>
                    </header>
                    <ol>
                        <li>
                            <p>To provide quality and healthy snacks that can satisfy the 
                            customers in very reasonable price.</p>
                        </li>
                        <li>
                            <p>To create a unique, innovative and healthy snack/desserts.</p>
                        </li>
                        <li>
                            <p>To provide healthy and delicious nutritious snack/dessert and 
                            provide excellent, reliable services to our customers.</p>
                        </li>
                        <li>
                            <p>To gain profit.</p>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'team'
}
</script>

<style scoped>
.header h1 {
    padding: 20px;
}
.header h3 {
    font-weight: normal;
    font-size: 12pt;
    padding: 20px;
}
.team-objectives>div {
    width: 50%;
}
.aira {
    background-image: url(../assets/images/airamae.jpg);
}
.amy {
    background-image: url(../assets/images/amyamaro.jpg);
}
.darenz {
    background-image: url(../assets/images/darenz.jpg);
}
.dann {
    background-image: url(../assets/images/danneric.jpg);
}
.cristina {
    background-image: url(../assets/images/macristina.jpg);
}
</style>
