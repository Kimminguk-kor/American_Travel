let pswrd = document.getElementById('pswrd');
        let toggleBtn = document.getElementById('toggleBtn');

        let lowerCase = document.getElementById('lower');
        let upperCase = document.getElementById('upper');
        let digit = document.getElementById('number');
        let specialChar = document.getElementById('special');
        let minLength = document.getElementById('length');

        function CheckPassword(data){
            const lower = new RegExp('(?=.*[a-z])')
            const upper = new RegExp('(?=.*[A-Z])')
            const number = new RegExp('(?=.*[0-9])')
            const special = new RegExp('(?=.*[!@#\$%\^&\*])')
            const length = new RegExp('(?=.{8,})')

            //소문자
            if(lower.test(data)){
                lowerCase.classList.add('valid')
            } else {
                lowerCase.classList.remove('valid')
            }
            //대문자
             if(upper.test(data)){
                upperCase.classList.add('valid')
            } else {
                upperCase.classList.remove('valid')
            }
            //숫자
             if(number.test(data)){
                digit.classList.add('valid')
            } else {
                digit.classList.remove('valid')
            }
            //특수문자
             if(special.test(data)){
                specialChar.classList.add('valid')
            } else {
                specialChar.classList.remove('valid')
            }
            //최소글자
             if(length.test(data)){
                minLength.classList.add('valid')
            } else {
                minLength.classList.remove('valid')
            }
        }

        // 비밀번호 가리기/보이기
        toggleBtn.onclick = function(){
            if(pswrd.type === 'password'){
                pswrd.setAttribute('type', 'text');
                toggleBtn.classList.add('hide')
            } else {
                pswrd.setAttribute('type', 'password');
                toggleBtn.classList.remove('hide')
            }
        }