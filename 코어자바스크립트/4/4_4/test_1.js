let calculator = {
	// 1.read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다. 
  // 입력받은 값은 객체의 프로퍼티에 저장합니다.
  num1 : 0,
  num2 : 0,
  read() {
  	this.num1 = prompt("값 1을 입력해주세요.", "");
    this.num2 = prompt("값 2를 입력해주세요.", "");
  },
  
  //2. sum()은 저장된 두 값의 합을 반환합니다.
  sum() {
  	return Number(this.num1) + Number(this.num2);
  },
  
  
  //3. mul()은 저장된 두 값의 곱을 반환합니다.
  mul() {
  	return Number(this.num1) * Number(this.num2);
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

//아쉬웠던 점 : prompt를 입력받은 값을 숫자로 변환할 경우, prompt 앞에 + 를 붙이면 정수가 되므로 그렇게 하자!