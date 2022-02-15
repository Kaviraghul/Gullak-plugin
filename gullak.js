console.log("i am connected");


// FIRST WE WILL CREATE A SELF INVOKE FUNCTION 

(function() {

    //SECOND WE WILL CREATE A VARIABLE WHERE THE CONTENTS WILL BE PRE-DEFINED

    var preDefinedProps = {
        pluginBtnClass : '',
        pluginBtnHTML : 'plugin',
        closeBtnClass : '',
        closeBtnHTML : 'X',
        showBtnCallback: function () { },
        closeBtnCallback : function () { },
    }

    //THIRD WE WILL CREATE A ELEMENT PROTOTYPE FUNCTION

    Element.prototype.gullakPlugin = function(newProperties){

        //WE WILL USE SPREAD OPERATIONS TO APPEND CHANGES IN DEFAULT PROPERTIES, WHEN SOME PROPERTIES ARE CUSTOMIZED BY THE USER

        if(newProperties){
            this.finalProperties = { ...preDefinedProps, ...newProperties};
        }else{
            this.finalProperties = preDefinedProps;
        }

        //WE WILL STORE ALL THE VARIABLES AND SUB FUNCTIONS IN OF THE FUNCTIONS IN A VARIABLE USING "THIS"
        
        var localObject = this;

        //ALL THE CSS PROPERTIES WILL BE STORED IN A VARIABLE BTW ` ` 

        var styleComponent = `<style>

            .plugInBtn-${localObject.id}{
                padding: 10px 60px;
                background-color: black;
                color: white;
                border : none;
                font-size : 30px;
                border-radius : 10px;
                cursor: pointer;
            }

            .popUpModalBackground-${localObject.id}{
                display : none;
                z-index : 0;
                position : fixed;
                top : 0;
                left : 0;
                width : 100%;
                height : 100%;
                background : rgb(12 10 10 / 46%);
            }

            .popUpModal-${localObject.id}{
                position : fixed;
                background-color: white;
                width : 400px;
                top : 30%;
                left : 35%;
                padding-top: 30px;
            }

            .close-${localObject.id}{
               position: absolute;
               right: 5%;
               top: 5%;
               cursor: pointer;
            }

            

            .tab-${localObject.id}{
                display : none;
            }

            .tab-${localObject.id} input{
                width : 100%;
                height : 35px;
                font-size: 20px;
                padding-top : 10px;
                border:none;
                border-bottom:solid;
                border-color: gray;
            }

            .tab-${localObject.id} input:focus{
                outline:none;
                border-color: green;
            }

            

            .submitButton-${localObject.id}{
                border:none;
                border-radius: 5px;
                width: 100%;
                height:40px;
                background-color:black;
                color: white;
                display: flex; 
                justify-content: center;
                align-items: center;
                margin-top: 10px;
                font-size: 20px;
                cursor: pointer;
            }

            .previousArrowBtn-${localObject.id}{
                width: 20px;
                height: 20px;
                padding: 5px;
                border-radius: 50px;
                object-fit: cover;
                position: absolute;
                left: 5%;
                top: 5%;
                cursor: pointer;
            }

            .otpErrorStatement-${localObject.id}{
                color: red;
                display: none;
            }


            .productsScreen-${localObject.id}{
                width: 100%;
                height: 360px;
                overflow: auto;
            }

            .productsScreenMenu-${localObject.id}{
                margin:0;
                padding: 0;
                
            }

            .productsScreenMenuList-${localObject.id}{
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            

            .productsScreenIndividualProducts-${localObject.id}{
                background-color: white;
                width: 90%;
                margin:10px;
                border-radius: 10px;
            }

            .productImage-${localObject.id}{
                width: 100%;
                height: 60%;
                object-fit: cover;
                border-radius: 10px 10px 0 0;
            }

            .gullakLogo-${localObject.id}{
                width : 40px;
                height : 40px;
                background-color:black;
                border-radius: 50px;
                object-fit : cover;
                border-style: solid;
                border-color: white;
                border-width: 3px;
                margin: 5px 0 5px  15px;
                box-shadow:  0 0 5px lightblue, 0 0 5px lightblue;
            }

            .userName-${localObject.id}{
                margin: 15px ;
                font-size: 25px;
                margin: 5px 0 5px  15px;
                font-family: 'Inter', sans-serif;
            }

            .exploreStatement-${localObject.id}{
                margin: 5px 0 15px  15px;
                font-family: 'Inter', sans-serif;
                color: #929093;
            }

            .productCategory-${localObject.id}{
                margin: 10px ;
                font-size: 14px;
                color: #929093;
                font-family: 'Inter', sans-serif;
            }

            .productDescription-${localObject.id}{
                margin: 10px ;
                font-size: 27px;
                font-family: 'Inter', sans-serif;
            }

            .discountStatement-${localObject.id}{
                margin: 10px ;
                font-size: 13px;
                color: #929093;
                font-family: 'Inter', sans-serif;
            }

            .multiStepForm-${localObject.id}{
                margin: 20px;
                height: 350px;
                display: flex;
                flex-direction: column;
                align-item: center;
                justify-content: center;
                font-family: 'Inter', sans-serif;
            }

        </style>`;

        // SIMILARLY WE WILL ALS0 STORE ALL THE HTML IN A VARIALBLE INSIDE ` `

        var htmlComponent = `
            
            <button id="modal-open-${localObject.id}" class = "plugInBtn-${localObject.id}" >
            ${localObject.finalProperties.pluginBtnHTML}</button>

            <div class = "popUpModalBackground-${localObject.id}" id = "modal-${localObject.id}" >
                <div class = "popUpModal-${localObject.id}" id = "popUpModalScreen-${localObject.id}" >
                    <span class = "close-${localObject.id}" id = "modal-close-${localObject.id}">${localObject.finalProperties.closeBtnHTML}</span>
                    <form class="multiStepForm-${localObject.id}">
                        <div class="tab-${localObject.id}">
                            <img class = "gullakLogo-${localObject.id}" alt ="" src ="images/gullak.png"></img>
                            <h1>Name and Phone Number:</h1>
                            <p><input placeholder="Name..." oninput="this.className = ''" name="fname"></p>
                            <p><input placeholder="Phone number..." oninput="this.className = ''" name="lname"></p>
                        </div>
                        <div class="tab-${localObject.id}">
                            <h1>OTP:</h1>
                            <p><input id ="userOTP-${localObject.id}" placeholder="Enter OTP" oninput="this.className = ''" name="otp"></p>
                            <p id ="errorStatement-${localObject.id}" class="otpErrorStatement-${localObject.id}" >*please enter a valid 5 digit OTP</p>
                        </div>
                        <div class="tab-${localObject.id}">
                            <div class = "productsScreen-${localObject.id}">
                              <img class = "gullakLogo-${localObject.id}" alt ="" src ="images/gullak.png"></img>
                              <h3 class= "userName-${localObject.id}" >Hello, Neeraj<span class="wave">👋🏾</span></h3>
                              <p class= "exploreStatement-${localObject.id}" >Explore goals below to get started.</p>
                              <ul class = "productsScreenMenu-${localObject.id}" >
                                 <li class = "productsScreenMenuList-${localObject.id}" >
                                    <div class = "productsScreenIndividualProducts-${localObject.id}">
                                        <img class = "productImage-${localObject.id}" alt ="" src="https://cdn.bolnews.com/wp-content/uploads/2021/12/FotoJet-27-2.jpg"></img>
                                        <p class = "productCategory-${localObject.id}" >ELECTRONICS</p>
                                        <h3 class = "productDescription-${localObject.id}" >Start saving up for your favourite phone.</h3>
                                        <p class = "discountStatement-${localObject.id}">Earn upto 17% returns with out exclusive partners</p>
                                    </div>
                                 </li>
                                 <li class = "productsScreenMenuList-${localObject.id}" >
                                    <div class = "productsScreenIndividualProducts-${localObject.id}">
                                        <img class = "productImage-${localObject.id}" alt ="" src="https://cdn.luxe.digital/media/2020/05/27161206/best-office-chairs-high-end-luxe-digital.jpg"></img>
                                        <p class = "productCategory-${localObject.id}" >FURNITURE</p>
                                        <h3 class = "productDescription-${localObject.id}" >Make every room a celebration.</h3>
                                        <p class = "discountStatement-${localObject.id}">Upto 30% returns with our partners</p>
                                    </div>
                                    
                                 </li>
                                 <li class = "productsScreenMenuList-${localObject.id}" >
                                    <div class = "productsScreenIndividualProducts-${localObject.id}">
                                        <img class = "productImage-${localObject.id}" alt ="" src="https://www.barcelo.com/pinandtravel/wp-content/uploads/2020/12/travel-destinations-2021_holiday-destinations-1200x900.jpg"></img>
                                        <p class = "productCategory-${localObject.id}" >TRAVEL</p>
                                        <h3 class = "productDescription-${localObject.id}" >Plan that pending trip to Maldives.</h3>
                                        <p class = "discountStatement-${localObject.id}">Earn upto 30% returns on flight and hotels</p>
                                    </div>
                                 </li>
                                 <li class = "productsScreenMenuList-${localObject.id}" >
                                    <div class = "productsScreenIndividualProducts-${localObject.id}">
                                        <img class = "productImage-${localObject.id}" alt ="" src="http://www.meranews.in/backend/main_imgs/harleydavidson1_harley-davidson-likely-to-launch-three-new-bikes_0.jpg"></img>
                                        <p class = "productCategory-${localObject.id}" >VEHICLES</p>
                                        <h3 class = "productDescription-${localObject.id}" >The adrenaline rush comes free.</h3>
                                        <p class = "discountStatement-${localObject.id}">Save for your fav bike and earn 15% returns</p>
                                    </div>
                                 </li>
                                 <li class = "productsScreenMenuList-${localObject.id}" >
                                    <div class = "productsScreenIndividualProducts-${localObject.id}">
                                        <img class = "productImage-${localObject.id}" alt ="" src="https://www.bullcitydentaldowntown.com/wp-content/uploads/2018/11/smiling-family.jpg"></img>
                                        <p class = "productCategory-${localObject.id}" >INSURANCE</p>
                                        <h3 class = "productDescription-${localObject.id}" >Keep your loved ones safe and secure.</h3>
                                        <p class = "discountStatement-${localObject.id}">Upto 15% returns with our partners</p>
                                    </div>
                                 </li>
                                 <li class = "productsScreenMenuList-${localObject.id}" >
                                    <div class = "productsScreenIndividualProducts-${localObject.id}">
                                        <img class = "productImage-${localObject.id}" alt ="" src="https://mcmscache.epapr.in/post_images/website_300/post_18902040/thumb.jpg"></img>
                                        <p class = "productCategory-${localObject.id}" >VEHICLES</p>
                                        <h3 class = "productDescription-${localObject.id}" >Save up for your dream car</h3>
                                        <p class = "discountStatement-${localObject.id}">Upto 15% returns with our partners</p>
                                    </div>
                                 </li>
                                 <li class = "productsScreenMenuList-${localObject.id}" >
                                    <div class = "productsScreenIndividualProducts-${localObject.id}">
                                        <img class = "productImage-${localObject.id}" alt ="" src="https://memberpress.com/wp-content/uploads/2019/04/Setting-Goals@2x.png"></img>
                                        <p class = "productCategory-${localObject.id}" >PERSONALIZE</p>
                                        <h3 class = "productDescription-${localObject.id}" >Create a customised goal+</h3>
                                        <p class = "discountStatement-${localObject.id}">Get a minimum of 5% returns on any goal</p>
                                    </div>
                                 </li>
                              </ul>
                            </div>
                        </div>
                        <img class="previousArrowBtn-${localObject.id}" alt="" src="https://cdn-icons-png.flaticon.com/512/109/109618.png"  type="button" id="prevBtn-${localObject.id}" /img>
                        <button class = "submitButton-${localObject.id}" type="button" id="nextBtn-${localObject.id}">Submit</button>
                  </form>
                </div>
            </div>
        `

        // AFTER DEFINING CSS AND HTML PROPERTIES AND COMPONENTS IN TWO DIFFERENT VARIABLES WE WILL APPEND IT TO THE localObject VARIABLE

        localObject.innerHTML = htmlComponent;
        localObject.innerHTML += styleComponent;

        // JAVASCRIPT FUNCTIONS FOR THE HTML TAGS ARE DEFINED BY getElementById METHORD AND ADDING AN EVENTLISTENER 

        document.getElementById(`modal-open-${localObject.id}`).addEventListener("click", function(){
            
            // FOR MAKING THE MODAL APPEAR, WE WILL CHANGE THE DISPLAY PROPERTY OF THE MODAL WHEN THE PLUGIN BUTTON IS CLICKED

            document.getElementById(`modal-${localObject.id}`).style.display = "block";
            localObject.finalProperties.showBtnCallback();
        });

        document.getElementById(`modal-close-${localObject.id}`).addEventListener("click", function(){

            // TO CLOSE THE MODAL WE WILL CHANGE THE MODAL DISPLAY PROPERTY TO NONE WHEN THE x BUTTON IS CLICKED 

            document.getElementById(`modal-${localObject.id}`).style.display = "none";
            localObject.finalProperties.closeBtnCallback();
        });

        document.getElementById(`nextBtn-${localObject.id}`).addEventListener("click", function(){

            // AFTER FILLING THE FORM IF WE WANT TO SUBMIT AND PROCEED FURTHER WE WILL PASS 1 IN THE FUNTION nextPrev

            nextPrev(1);
        });

        document.getElementById(`prevBtn-${localObject.id}`).addEventListener("click", function(){

            // IF WE WANT TO GO TO THE PREVIOUS FORM WE WILL PASS -1 IN THE nextPrev FUNCTION

            nextPrev(-1);
        });


        //HERE THE FUNCTIONS THAT ARE USED TO VERIFY THE INPUT AND TOGGLE BTW NEXT AND PREVIOUS SCREENS ARE MENTIONED


        //INITIALLY WE WILL DEFINE A VARIABLE currentTab WITH 0 SO EVERY TIME WHEN THE PAGE LOADS THE PROCESSES STARTS FROM 1ST SCREEN

        var currentTab = 0;

        //SHOW TAB IS A FUNCTION THAT SHOWS THE CURRENT TAB.

        showTab(currentTab); 

        function showTab(n){
            var x = document.getElementsByClassName(`tab-${localObject.id}`);//this will collect all the divs having class name tab and store it as array of objects.
            x[n].style.display = "block";

            //the display of previous buttton is altered based on the current tab number

            if(n == 0 || n == x.length-1){
                document.getElementById(`prevBtn-${localObject.id}`).style.display = "none";
            }else{
                document.getElementById(`prevBtn-${localObject.id}`).style.display = "inline";
            }

            //the display of next buttton is altered based on the current tab number

            if(n == x.length-1){
                document.getElementById(`nextBtn-${localObject.id}`).style.display = "none";
                document.getElementById(`popUpModalScreen-${localObject.id}`).style.backgroundColor = "rgb(96.5%,95.7%,100%)";
            }else{
                document.getElementById(`nextBtn-${localObject.id}`).innerHTML = "Submit";
                document.getElementById(`nextBtn-${localObject.id}`).style.backgroundColor = "black";
            }


        }

        //this function will help us validate the form 

        function validateForm(){
            var x, y, i, valid = true; //few variable are pre defined 
            x = document.getElementsByClassName(`tab-${localObject.id}`);//this will collect all the divs having class name tab and store it as array of objects.
            y = x[currentTab].getElementsByTagName("input");// this will collect all the input tags on the present screen 

            //the below if statement is particularly mentioned the otp screen, if the user otp does not matches the predefined number here then 
            //the valid will be set to false  

            if(currentTab == 1){
                if( y[0].value != "12345" ){
                    document.getElementById(`errorStatement-${localObject.id}`).style.display = "block";
                    y[0].className += "invalid";
                    return valid = false;
                }
            }

            //for the rest of the screens if the input is undefined then the valid will be set to false

            for(i = 0; i < y.length ; i++){
                if(y[i].value == "" ){
                    y[i].className += "invalid";
                    valid = false;
                }
            }

            return valid;
        }

        //this function will tell us which tab to display based on the submit and previous click;

        function nextPrev(n){

            var x = document.getElementsByClassName(`tab-${localObject.id}`);  //this will collect all the divs having class name tab and store it as array of objects.

            if(n == 1 && !validateForm()) return false;

            //after validation we will change the display property of the current screen to none. 

            x[currentTab].style.display = "none";

            //once the display property is changed to none we will increase the current tab number with -1 or 1 based on user selection

            currentTab = currentTab + n;

            //verify if the currentTab is less than the screens length
           
            if(currentTab >= x.length){
                document.getElementById("regForm").submit();
                return false;
            }

            // and finally pass the currentTab in showTab function to change the screen

            showTab(currentTab);

        }
       }

})();




