<template>
<div class="table">
    <div class="pagination">
        <button class="prev" @click.prevent="prevPage()" :disabled="currentPage === 0">
            <i class="fa fa-chevron-left fa-sm"></i>
          </button>
          <button class="next"  @click.prevent="nextPage()" :disabled="currentPage >= pageCount -1 || datas.length < size">
            <i class="fa fa-chevron-right fa-sm"></i>
          </button>
    </div>
    <div class="table-responsive">
        <table>
            <thead>
            <tr>
                <th scope="col">S/N</th>
                <th v-for="(colname, index) in col" :key="index">{{colname}}</th>
            </tr>
            </thead>
            <transition-group
                name="staggered-fade"
                tag="tbody"
                :css="false"
                @before-enter="beforeEnter"
                @enter="enter"
                @leave="leave"
                >
        
            <tr v-for="(data, index) in datas" :key="data.UserName" :data-index="index">
                <td scope="row">{{ (currentPage * size) + index + 1 }}</td>
                <td>{{data.FirstName}}</td>
                <td>{{data.LastName}}</td>
                <td>{{data.Gender}}</td>
                <td>{{data.Email}}</td>
                <td>{{data.PhoneNumber}}</td>
                <td>{{data.UserName}}</td>
                <td> <a :href="data.URL">{{data.URL}}</a></td>
                <td>{{data.CreditCardType}}</td>
                <td>{{data.PaymentMethod}}</td>
            </tr>
            </transition-group>
        </table>

    </div>
    <div class="pagination">
        <button class="prev" @click.prevent="prevPage()" :disabled="currentPage === 0">
            <i class="fa fa-chevron-left fa-sm"></i>
          </button>
          <button class="next"  @click.prevent="nextPage()" :disabled="currentPage >= pageCount -1 || datas.length < size">
            <i class="fa fa-chevron-right fa-sm"></i>
          </button>
    </div>

</div>
    
</template>

<script>
export default {
    name: 'data-table',
    props: {
        col: {
            type: Array,
            required: true,
        },
        datas: {
            type: Array,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
        pageCount: {
            type: Number,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
        prevPage: {
            type: Function,
            required: true,
        },
        nextPage: {
            type: Function,
            required: true,
        },
        beforeEnter: {
            type: Function,
            required: true,
        },
        enter: {
            type: Function,
            required: true,
        },
        leave: {
            type: Function,
            required: true,
        }
    },
}
</script>

<style scoped>

.table-responsive {
    width: 100%;
    overflow: auto;
}

.pagination {
    margin: 20px;
    height: 50px;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.pagination button:disabled {
    cursor: not-allowed;
    background: #E2E2EA 0% 0% no-repeat padding-box;
    color: var(--primary-color);
}

.pagination button {
    width: 28px;
    height: 25px;
    border: 0;
    border-radius: 6px;
    opacity: 1;
    background: var(--primary-color) 0% 0% no-repeat padding-box;
    box-shadow: 4px 5px 20px #0000001A;
    color: #fff;
    cursor: pointer;
    margin: 10px;
}


    table { 
  width: 100%; 
  border-collapse: collapse; 
}
/* Zebra striping */
tr:nth-of-type(odd) { 
  background: #fff; 
}
th { 
  background: #fff; 
  color: #000; 
  font-weight: bold;
  font-size: 0.8rem;
}
td, th { 
  padding: 6px; 
  border: 1px solid #ccc; 
  text-align: left; 
}
tr {
    transition: all .3s ease;
}
td {
    font-size: 0.8rem;
}
th:nth-child(1),
td:nth-child(1){
    background-color: var(--tertiary-color);
    color: #fff;
    font-weight: bold;
}
tr:hover td:nth-child(1) {
    color: var(--primary-color)
}

tr:hover {
    background-color: var(--primary-color);
    color: #fff;
}

/* 
@media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
	td { 
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		position: absolute;
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}
	
	td:nth-of-type(1):before { content: "S/N"; }
	td:nth-of-type(2):before { content: "First Name"; }
	td:nth-of-type(3):before { content: "Last Name"; }
	td:nth-of-type(4):before { content: "Gender"; }
	td:nth-of-type(5):before { content: "Email"; }
	td:nth-of-type(6):before { content: "Phone Number"; }
	td:nth-of-type(7):before { content: "URL"; }
	td:nth-of-type(8):before { content: "UserName"; }
	td:nth-of-type(9):before { content: "Credit Card Type"; }
	td:nth-of-type(10):before { content: "Payment Method"; }
} */
</style>