# portfolio
Antonio Crespo Portfolio

Proyecto: Web Site Sauce Demo

Automated Test Strategy

Revision history

Versión  |  	Autor   	   |  Description |	   Fecha
  1.0    |   Antonio Crespo	   |   Creation	  |   Julio 2020
<br> 
Index
1.	Introduction.
2.	Scope.
3.	Ambient and Test Tools
    a.	Test Tools.
    b.	Test ambient.
4.	Input and output criteria.
    a.	Input criteria.
    b.	Output critiria.
5.	Test report
<br>
1.  Introduction<br>
This Automated Testing Strategy describes the scope of testing, the testing environment, the resources required, the tools to use, the risks, contingency plans, and the test execution schedule for the Sauce Demo project.
<br>
2. Scope<br>
Black box tests (automated) will be carried out on the functionalities selected during the planning of each sprint.
The functionalities to be automated will be selected using the criteria of the Checklist "What test cases to automate".
<br>
3. Ambient and test tools.<br>
<br>
3. a Test tools<br>
    Tool                    |   Function    
Cypress	                    |  Framework to automate web systems.
Mocha JUnit Reporter        |  Report framework
<br>
3. b Test ambient.<br>
Browser          | Chrome, Edge, Electron.
Operating system | Windows 10
<br>
4. Input and output criteria.<br>
<br>
4. a Input criteria.<br>
The functionalities must be deployed in the QA environment and have been manually tested.
The testing framework is installed and ready to run.
QA environment is available.
Critical defects found during manual testing have been resolved and closed.
<br>
4. b Output criteria.<br>
Execution of all automated test cases.
Sufficient coverage of requirements and functionalities under testing has been achieved.
No high severity defect is open.
<br>
5. Test Report<br>
The Automatic Test Report will be obtained through Mocha JUnit. This Report will report on the results of the execution of each test case. It will include tests that passed and failed, errors found, success rate, and elapsed time.



Test cases examples:

<img src="Images/Test1.png">
<br>
<img src="Images/Test2.png">
