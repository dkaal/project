		
	
		let firstInputMatrix = [];
		let secondInputMatrix = [];
		let resultMatrix =[];

		//행렬 초기화
		function countMatrix(inputMatrix,countRowNumber,countColumnNumber){
			for(let i=0; i<countRowNumber;i++){
				inputMatrix[i] = [];
				for(let j=0;j<countColumnNumber;j++){
					inputMatrix[i][j] = 0;
				}
			}
			//console.log(inputMatrix);
		}

		//행렬 시각화
		function visualizeMatrix(selectId, matrix){
			let matrixString = '<div class="matrix_center">';
			for(let i=0; i<matrix.length; i++){
				let tempString = '<div class="matrix_input">';
				for(let j=0; j<matrix[i].length; j++){
					tempString += '<input id="';
					tempString += selectId + "_" + String(i) + "_" + String(j);
					tempString += '" class="matrix_result" type="number" min="0" max="99" value="';
					tempString += matrix[i][j];
					tempString += '"step="1" maxlength="1">';
				}
				tempString += '</div>';
				matrixString += tempString;
			}
			matrixString += '</div>';
			document.getElementById(selectId).innerHTML = matrixString;
			//console.log(matrix);
		}

		//결과 시각화
		function visualizeResultMatrix(selectId, matrix){
			let matrixString = '<div class="matrix_center">';
			for(let i=0; i<matrix.length; i++){
					let tempString = '<div class="matrix_input">';
					for(let j=0; j<matrix[i].length; j++){
							tempString += '<div id="';
							tempString += selectId + "_" + String(i) + "_" + String(j);
							tempString += '" class="div_matrix" value="';
							tempString += matrix[i][j];
							tempString += '">';
							tempString += matrix[i][j].toLocaleString();
							tempString += '</div>';
					}
					tempString += '</div>';
					matrixString += tempString;
			}
			matrixString += '</div>';
			document.getElementById(selectId).innerHTML = matrixString;
			//console.log(matrix);
		}
		


		//Value 값 변경 추적과 값 갱신
		function checkValueAttribute(){
			this.onchange = function(event){
				const inputId = (event.target.id);
				const parseInfo = (event.target.id).split("_");
				const matrixName = parseInfo[0];
				const matrixRowSize = parseInfo[1];
				const matrixColumnSize = parseInfo[2];
		        const changedValue = Number(event.target.value);
				//alert(firstInputMatrix[matrixRowSize][matrixColumnSize]);
				//alert(matrixName + "/" + matrixRowSize + "/" + matrixColumnSize+"/"+changedValue);

				switch(matrixName){
					case 'firstInputMatrix':
			        firstInputMatrix[matrixRowSize][matrixColumnSize] = changedValue;
 					visualizeMatrix("firstInputMatrix", firstInputMatrix);
					if(Number(firstInputMatrix[matrixRowSize][matrixColumnSize]) > 99){
						firstInputMatrix[matrixRowSize][matrixColumnSize] = 99;
						visualizeMatrix("firstInputMatrix", firstInputMatrix);
						errorOutputBox(inputId);
						setTimeout(function(){
							resetOutput(inputId);
						}, 400);
					}else if(Number(firstInputMatrix[matrixRowSize][matrixColumnSize]) < 0){
						const errorMsg = document.getElementById("firstText");

						firstInputMatrix[matrixRowSize][matrixColumnSize] = 0;
						visualizeMatrix("firstInputMatrix", firstInputMatrix);
						errorOutputBox(inputId);
						errorMsg.style.color ="#f09999";
						errorMsg.innerHTML = "Please enter from 0 to 99";
						errorMsg.classList.add("vibration");
						setTimeout(function(){
							resetOutput(inputId);
							errorMsg.classList.remove("vibration");
						}, 400);
					}
		            //alert(firstInputMatrix);
					break;

					case 'secondInputMatrix':
					secondInputMatrix[matrixRowSize][matrixColumnSize] = changedValue;
					visualizeMatrix("secondInputMatrix", secondInputMatrix);
					if(Number(secondInputMatrix[matrixRowSize][matrixColumnSize]) > 99){
						secondInputMatrix[matrixRowSize][matrixColumnSize] = 99;
						visualizeMatrix("secondInputMatrix", secondInputMatrix);
                        errorOutputBox(inputId);
						setTimeout(function(){
							resetOutput(inputId);
						}, 400);
					}else if(Number(secondInputMatrix[matrixRowSize][matrixColumnSize]) < 0){
						const errorMsg = document.getElementById("secondText");
						secondInputMatrix[matrixRowSize][matrixColumnSize] = 0;
						visualizeMatrix("secondInputMatrix", secondInputMatrix);
                        errorOutputBox(inputId);
						errorMsg.style.color ="#f09999";
						errorMsg.innerHTML = "Please enter from 0 to 99";
						errorMsg.classList.add("vibration");
						setTimeout(function(){
							resetOutput(inputId);
							errorMsg.classList.remove("vibration");
						}, 400);
					}
					//alert(secondInputMatrix);
               	    break;
				}
				//alert(event.target.id + " " + event.target.value);
			}
		}

		//에러 input 색상변경 및 흔들기
		function errorInputBox(errorMsgId, errorInputBoxId, errorLabelId, errorInputId){
			
			const errorMsg = document.getElementById(errorMsgId);
			const errorInputBox = document.getElementById(errorInputBoxId);
			const errorLabel = document.getElementById(errorLabelId);
			const errorInput = document.getElementById(errorInputId);

			errorMsg.style.color ="#f09999";
			errorMsg.innerHTML = "Please enter from 1 to 7";
			errorInputBox.style.border ="0.03rem solid #f09999";
			errorLabel.style.color ="#f09999";
			errorInput.style.color ="#f09999";

			errorMsg.classList.add("vibration");
			errorInputBox.classList.add("vibration");
			errorLabel.classList.add("vibration");
			errorInput.classList.add("vibration");

			setTimeout(function() {
				errorMsg.classList.remove("vibration");
				errorInputBox.classList.remove("vibration");
				errorLabel.classList.remove("vibration");
				errorInput.classList.remove("vibration");
			}, 400);
		}
		// function errorTextBox(errorMsgId){
		// 	document.getElementById(errorMsgId).innerHTML = "Please enter from 1 to 7";
		// }

		//error 아닐경우 색상 원복
		function resetColor(resetMsgId, resetInputBoxId, resetLabelId, resetInputId){
			const resetMsg = document.getElementById(resetMsgId);
			const resetInputBox = document.getElementById(resetInputBoxId);
			const resetLabel = document.getElementById(resetLabelId);
			const resetInput = document.getElementById(resetInputId);

			resetMsg.style.color ="#bcd0b7";
			resetMsg.innerHTML = "Please enter from 1 to 7";
			resetInputBox.style.border ="0.03rem solid #bcd0b7";
			resetLabel.style.color ="#bcd0b7";
			resetInput.style.color ="#bcd0b7";
		}

		//에러 output input 색상
		function errorOutputBox(errorOutputId){
			const errorOutput = document.getElementById(errorOutputId);

			errorOutput.style.backgroundColor = "#f09999";

			errorOutput.classList.add("vibration");

			setTimeout(function() {
				errorOutput.classList.remove("vibration");
			}, 400);
		}

		//에러 output input 원복 색상
		function resetOutput(resetOutputId){
			const resetOutput = document.getElementById(resetOutputId);

			resetOutput.style.backgroundColor = "#bcd0b7";
		}

		//에러 Result 색상
		function errorResultBox(errorResultId, errorResultText){
			const errorResult = document.getElementById(errorResultId);
			document.getElementById(errorResultId).innerHTML = errorResultText;

			errorResult.style.color = "#f09999";

			errorResult.classList.add("vibration");

			setTimeout(function() {
				errorResult.classList.remove("vibration");
			}, 400);
		}

		//에러 Result 원복 색상
		function resetResult(resetResultId, resetResultText){
			const resetResult = document.getElementById(resetResultId);
			document.getElementById(resetResultId).innerHTML = resetResultText;

			resetResult.style.color = "#bcd0b7";
		}

		
		//FIRST OUTPUT BUTTON
		document.getElementById("firstOutputBtn").onclick = function(){
			const firstRowSize = document.getElementById("firstRowSize").value;
			const firstColumnSize = document.getElementById("firstColumnSize").value;
			
			if(firstRowSize > 7 && firstColumnSize > 7){
				errorInputBox("firstText","firstRow","firstRowLabel", "firstRowSize");
				errorInputBox("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
			}else if(firstRowSize > 7){
				resetColor("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
				errorInputBox("firstText","firstRow","firstRowLabel", "firstRowSize");
			}else if(firstColumnSize > 7){
				resetColor("firstText","firstRow","firstRowLabel", "firstRowSize");
				errorInputBox("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
			}else{
				resetColor("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
				resetColor("firstText","firstRow","firstRowLabel", "firstRowSize");

				firstInputMatrix = [];
				countMatrix(firstInputMatrix, firstRowSize, firstColumnSize);
				visualizeMatrix("firstInputMatrix", firstInputMatrix );
				
				checkValueAttribute();
			}
		}
		
		//SECOND OUTPUT RANDOM
        document.getElementById("secondOutputBtn").onclick = function(){
			const secondRowSize = document.getElementById("secondRowSize").value;
			const secondColumnSize = document.getElementById("secondColumnSize").value;

			if(secondRowSize > 7 && secondColumnSize > 7){
				errorInputBox("secondText","secondRow","secondRowLabel", "secondRowSize");
				errorInputBox("secondText","secondColumn","secondColumnLabel", "secondColumnSize");
			}else if(secondRowSize > 7){
				resetColor("secondText","secondColumn","secondColumnLabel", "secondColumnSize");
				errorInputBox("secondText","secondRow","secondRowLabel", "secondRowSize");
			}else if(secondColumnSize > 7){
				resetColor("secondText","secondRow","secondRowLabel", "secondRowSize");
				errorInputBox("secondText","secondColumn","secondColumnLabel", "secondColumnSize");
			}else{
				resetColor("secondText","secondColumn","secondColumnLabel", "secondColumnSize");
				resetColor("secondText","secondRow","secondRowLabel", "secondRowSize");

				secondInputMatrix = [];
				countMatrix(secondInputMatrix, secondRowSize, secondColumnSize);
				visualizeMatrix("secondInputMatrix", secondInputMatrix );
					
				checkValueAttribute();
			}
		}

		//FIRST RANDOM BUTTON
		document.getElementById("firstRandomBtn").onclick = function(){
			const firstRowSize = document.getElementById("firstRowSize").value;
			const firstColumnSize = document.getElementById("firstColumnSize").value;

			if(firstRowSize > 7 && firstColumnSize > 7){
				errorInputBox("firstText","firstRow","firstRowLabel", "firstRowSize");
				errorInputBox("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
			}else if(firstRowSize > 7){
				resetColor("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
				errorInputBox("firstText","firstRow","firstRowLabel", "firstRowSize");
			}else if(firstColumnSize > 7){
				resetColor("firstText","firstRow","firstRowLabel", "firstRowSize");
				errorInputBox("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
			}else{
				resetColor("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
				resetColor("firstText","firstRow","firstRowLabel", "firstRowSize");

				firstInputMatrix = [];
				countMatrix(firstInputMatrix, firstRowSize, firstColumnSize);

				for(let i=0;i<firstInputMatrix.length;i++){
					for(let j=0;j<firstInputMatrix[i].length;j++){
						firstInputMatrix[i][j] = Number(Math.floor(Math.random()*(100)) + 0);
						visualizeMatrix("firstInputMatrix", firstInputMatrix);
					}
				}
				checkValueAttribute();
			}
		}

		//SECOND RANDOM BUTTON
		document.getElementById("secondRandomBtn").onclick = function(){
			const secondRowSize = document.getElementById("secondRowSize").value;
			const secondColumnSize = document.getElementById("secondColumnSize").value;

			if(secondRowSize > 7 && secondColumnSize > 7){
				errorInputBox("secondText","secondRow","secondRowLabel", "secondRowSize");
				errorInputBox("secondText","secondColumn","secondColumnLabel", "secondColumnSize");
			}else if(secondRowSize > 7){
				resetColor("secondText","secondColumn","secondColumnLabel", "secondColumnSize");
				errorInputBox("secondText","secondRow","secondRowLabel", "secondRowSize");
			}else if(secondColumnSize > 7){
				resetColor("secondText","secondRow","secondRowLabel", "secondRowSize");
				errorInputBox("secondText","secondColumn","secondColumnLabel", "secondColumnSize");
			}else{
				resetColor("secondText","secondColumn","secondColumnLabel", "secondColumnSize");
				resetColor("secondText","secondRow","secondRowLabel", "secondRowSize");
				
				secondInputMatrix = [];
				countMatrix(secondInputMatrix, secondRowSize, secondColumnSize);

				for(let i=0;i<secondInputMatrix.length;i++){
					for(let j=0;j<secondInputMatrix[i].length;j++){
						secondInputMatrix[i][j] = Number(Math.floor(Math.random()*(100)) + 0);
						visualizeMatrix("secondInputMatrix", secondInputMatrix);
					}
				}
				checkValueAttribute();
			}
		}


		//PLUS BUTTON
		document.getElementById("plusBtn").onclick = function(){
			const firstRowSize = document.getElementById("firstRowSize").value;
            const firstColumnSize = document.getElementById("firstColumnSize").value;
			const secondRowSize = document.getElementById("secondRowSize").value;
            const secondColumnSize = document.getElementById("secondColumnSize").value;
			
			resultMatrix = [];
			if(firstInputMatrix.length == 0 || secondInputMatrix.length == 0){
				errorResultBox("resultText", "Please enter MATRIX");
			}else if((firstRowSize != firstInputMatrix.length) || (firstColumnSize != firstInputMatrix[0].length)){
				errorResultBox("resultText", "Please enter MATRIX A");
			}else if((secondRowSize != secondInputMatrix.length) || (secondColumnSize != secondInputMatrix[0].length)){
				errorResultBox("resultText", "Please enter MATRIX B");
			}else if((firstRowSize == secondRowSize) && (secondColumnSize == firstColumnSize)){
				resetResult("resultText", "The result of MATRIX A and MATRIX B");
	            countMatrix(resultMatrix, firstRowSize, firstColumnSize);
				console.log(firstInputMatrix.length);
				for(let i=0; i<firstInputMatrix.length;i++){
					for(let j=0; j<firstInputMatrix[i].length;j++){
						resultMatrix[i][j] = firstInputMatrix[i][j] + secondInputMatrix[i][j];
					}
				}
				visualizeResultMatrix("resultMatrix", resultMatrix );
			}else{
				errorResultBox("resultText", "MATRIX A and MATRIX B must be the same size");
			}
		
		}
		
		//MINUS BUTTON
		document.getElementById("minusBtn").onclick = function(){
			const firstRowSize = document.getElementById("firstRowSize").value;
			const firstColumnSize = document.getElementById("firstColumnSize").value;
			const secondRowSize = document.getElementById("secondRowSize").value;
			const secondColumnSize = document.getElementById("secondColumnSize").value;
			
			resultMatrix = [];
			
			if(firstInputMatrix.length == 0 || secondInputMatrix.length == 0){
				errorResultBox("resultText", "Please enter matrix");
			}else if((firstRowSize != firstInputMatrix.length) || (firstColumnSize != firstInputMatrix[0].length)){
				resultMatrix = [];
				errorResultBox("resultText", "Please enter MATRIX A");
			}else if((secondRowSize != secondInputMatrix.length) || (secondColumnSize != secondInputMatrix[0].length)){
				resultMatrix = [];
				errorResultBox("resultText", "Please enter MATRIX B");
			}else if((firstRowSize == secondRowSize) && (secondColumnSize == firstColumnSize)){
				resetResult("resultText", "The result of MATRIX A and MATRIX B");
				countMatrix(resultMatrix, firstRowSize, firstColumnSize);

				for(let i=0; i<firstInputMatrix.length;i++){
					for(let j=0; j<firstInputMatrix[i].length;j++){
						resultMatrix[i][j] = firstInputMatrix[i][j] - secondInputMatrix[i][j];
					}
				}
				visualizeResultMatrix("resultMatrix", resultMatrix );
				checkValueAttribute();
			}else{
				errorResultBox("resultText", "MATRIX A and MATRIX B must be the same size");
			}
		}

		//MULTI BUTTON
		document.getElementById("multiBtn").onclick = function(){
			const firstRowSize = document.getElementById("firstRowSize").value;
			const firstColumnSize = document.getElementById("firstColumnSize").value;
			const secondRowSize = document.getElementById("secondRowSize").value;
			const secondColumnSize = document.getElementById("secondColumnSize").value;
			
			resultMatrix = [];
			if(firstInputMatrix.length == 0 || secondInputMatrix.length == 0){
				errorResultBox("resultText", "Please enter matrix");
			}else if((firstRowSize != firstInputMatrix.length) || (firstColumnSize != firstInputMatrix[0].length)){
				resultMatrix = [];
				errorResultBox("resultText", "Please enter MATRIX A");
			}else if((secondRowSize != secondInputMatrix.length) || (secondColumnSize != secondInputMatrix[0].length)){
				resultMatrix = [];
				errorResultBox("resultText", "Please enter MATRIX B");
			}else if(firstColumnSize == secondRowSize){
				resetResult("resultText", "The result of MATRIX A and MATRIX B");
				countMatrix(resultMatrix, firstRowSize, secondColumnSize);
		
				for(let i=0;i<firstInputMatrix.length;i++){
					for(let j=0;j<secondInputMatrix[0].length;j++){
					let multiValue = 0;
						for(let k=0;k<firstInputMatrix[0].length;k++){
							multiValue += (firstInputMatrix[i][k] * secondInputMatrix[k][j]);
						}
						resultMatrix[i][j] = multiValue;
					}
					visualizeResultMatrix("resultMatrix", resultMatrix );
					checkValueAttribute();
				}
			}else{
				errorResultBox("resultText", "The number of rows in MATRIX A and columns in MATRIX B must be the same");
			}
		}
		
		//FIRST UNIT BUTTON
		document.getElementById("firstUnitBtn").onclick = function(){
			const firstRowSize = document.getElementById("firstRowSize").value;
			const firstColumnSize = document.getElementById("firstColumnSize").value;

			if(firstRowSize > 7 && firstColumnSize > 7){
				errorInputBox("firstText","firstRow","firstRowLabel", "firstRowSize");
				errorInputBox("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
			}else if(firstRowSize > 7){
				resetColor("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
				errorInputBox("firstText","firstRow","firstRowLabel", "firstRowSize");
			}else if(firstColumnSize > 7){
				resetColor("firstText","firstRow","firstRowLabel", "firstRowSize");
				errorInputBox("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
			}else if(firstRowSize == firstColumnSize){
				resetColor("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
				resetColor("firstText","firstRow","firstRowLabel", "firstRowSize");

				firstInputMatrix = [];
	            countMatrix(firstInputMatrix, firstRowSize, firstColumnSize);
				for(let i=0;i<firstRowSize;i++){
					firstInputMatrix[i][i] = 1;
					visualizeMatrix("firstInputMatrix", firstInputMatrix );
				}
				
			}else{
				errorInputBox("firstText","firstRow","firstRowLabel", "firstRowSize");
				errorInputBox("firstText","firstColumn","firstColumnLabel", "firstColumnSize");
				document.getElementById("firstText").innerHTML = "Must have the same number of rows and columns";
			}
		}

		//SECOND UNIT BUTTON
		document.getElementById("secondUnitBtn").onclick = function(){
			const secondRowSize = document.getElementById("secondRowSize").value;
			const secondColumnSize = document.getElementById("secondColumnSize").value;

			if(secondRowSize == secondColumnSize){
					secondInputMatrix = [];
	                countMatrix(secondInputMatrix, secondRowSize, secondColumnSize);
				for(let i=0;i<secondRowSize;i++){
					secondInputMatrix[i][i] = 1;
					visualizeMatrix("secondInputMatrix", secondInputMatrix );
				}
			}else{
				errorInputBox("secondText","secondRow","secondRowLabel", "secondRowSize");
				errorInputBox("secondText","secondColumn","secondColumnLabel", "secondColumnSize");
				document.getElementById("secondText").innerHTML = "Must have the same number of rows and columns";
			}
		}