function Test62() {
    return (
      <div className="App">
       
      </div>
    );
  }
  
  
  class Student {
    constructor(name, school, age, number) {
      this.name = name;
      this.school = school;
      this.age = age;
      this.number = number;
    }
    getInfo(){
      return console.log(this.name, this.school, this.age, this.number);
    }
  }
  
  class Kim extends Student {
    
  }
  
  class Lee extends Student {
    
  }
  
  let student1 = new Kim("김새싹", "새싹고", "20", "220928");
  student1.getInfo();
  let student2 = new Lee("이새싹", "새싹고", "20", "220938");
  student2.getInfo();
  
export default Test62;