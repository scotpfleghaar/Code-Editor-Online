var questionsMulitpleChoiceJava = [{
        questionNum: 1,
        questionInstructions: `What will the following code print when run?`,
        question: `public class TestClass{
  public static long main(String[] args){
     System.out.println("Hello");
     return 10L;
  }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
    
    It will throw an Error at runtime.`,
        choice1: `E
    
    None of these.`,
        choice2: `A
    
    Hello`,
        choice3: `B
    
    It will not print anything.`,
        choice4: `C
    
    It will not compile`,
        choice5: ``,
        explination: `When the program is run, the JVM looks for a method named main() which takes an array of Strings as input and returns nothing (i.e. the return type is void).
    But in this case, it doesn't find such a method ( the given main() method is returning long!) so it throws a java.lang.NoSuchMethodError.
    Note that java.lang.Error does not extend Exception class. It  extends java.lang.Throwable and so it can be "thrown".`,
    }, {
        questionNum: 1,
        questionInstructions: ` Question 2 : Given the following contents of two java source files:
    What changes, when made independently, will enable the code to compile and run?
    
    Each correct answer represents a complete solution. Choose all that apply.`,
        question: `package util.log4j;
public class Logger  {
  public void log(String msg){
      System.out.println(msg);
  }
}
package util;
public class TestClass {
    public static void main(String[] args) throws Exception {
        Logger logger = new Logger();
        logger.log("hello");
    }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `B
    
    Replace package util.log4j; with
    package util;`,
        answer2: `C
    
    Replace Logger logger = new Logger(); with:
    util.log4j.Logger logger = new util.log4j.Logger();`,
        choice1: `A
    
    Replace Logger logger = new Logger(); with:
    log4j.Logger logger = new log4j.Logger();`,
        choice2: `D
    
    Remove package util.log4j; from Logger.
    `,
        choice3: `E
    
    Add import log4j; to TestClass.`,
        choice4: ``,
        choice5: ``,
        explination: `This will put both the classes in the same package and TestClass can then directly use Logger class without importing anything.
    
    Using a fully qualified class name always works irrespective of whether you import the package or not. In this case, you are importing package util but Logger is in util.log4j. Therefore, the use of fully qualified class name for Logger, which is util.log4j.Logger, makes it work.
    
    Answer option A is incorrect. If you are not importing a class or the package of the class, you need to use the class's fully qualified name while using it. Here, you need to use util.log4j.Logger instead of just log4j.Logger:
    util.log4j.Logger logger = new util.log4j.Logger();
    
    Answer option D is incorrect. Remember that you can never access a class that is defined in the default package (i.e. the package with no name) from a class in any other package. So if you remove the package statement from Logger, you can't access it from util package, which is where TestClass is.
    
    Answer option E is incorrect. This will not help because Logger is in util.log4j package and not in log4j package.`,
    },
    {
        questionNum: 1,
        questionInstructions: `Which of the following statements will set the side of Square object referred by mysq to 20?`,
        question: `class Square {
   private double side = 0;
   String color;
   public Square(double length){
       this.side = length;
   }
   public double getSide() {  return side;    }

   public void setSide(double side) {  this.side = side;   }
}

public class TestClass {
   public static void main(String[] args) throws Exception {
       Square mysq = new Square(10);
       mysq.color = "red";
       //set mysq's side to 20
   }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
    
    mysq.setSide(20);`,
        choice1: `D
    
    side = 20;`,
        choice2: `E
    
    Square.mysql.side = 20;`,
        choice3: `A
    
    mysq.side = 20;`,
        choice4: `B
    
    mysq = new Square(20);`,
        choice5: ``,
        explination: `Answer option A is incorrect. Since side is a private variable, you cannot access it from outside Square class.
    
    Answer option B is incorrect. This will create a new Square object.`,
    }, {
        questionNum: 1,
        questionInstructions: ` Question 4 : Given that TestClass is a class, how many objects and reference variables are created by the following code?`,
        question: `TestClass t1, t2, t3, t4;
        t1 = t2 = new TestClass();
        t3 = new TestClass();`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        2 objects, 4 references.
        `,
        choice1: `A
        
        2 objects, 3 references.`,
        choice2: `C
        
        3 objects, 2 references.`,
        choice3: `D
        
        2 objects, 2 references.`,
        choice4: `E
        
        None of these.`,
        choice5: ``,
        explination: `A declared reference variable exists regardless of whether a reference value (i.e. an object) has been assigned to it or not.
        
        two news => two objects. t1, t2, t3, t4 => 4 references.`,
    }, {
        questionNum: 1,
        questionInstructions: `What does the zeroth element of the string array passed to the standard main method contain?`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        The first argument of the argument list, if present.`,
        choice1: `E
        
        None of these.`,
        choice2: `C
        
        The number of arguments.`,
        choice3: `B
        
        The string "java".`,
        choice4: `A
        
        The name of the class.`,
        choice5: ``,
        explination: `Note that if no argument is passed to the program, the args parameter is NOT null but a non-null array of Strings of length zero.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will be the result of attempting to compile and run the following program?`,
        question: `public class TestClass{
  public static void main(String args[ ] ){
    Object a, b, c ;
    a = new String("A");
    b = new String("B");
    c = a;
    a = b;
    System.out.println(""+c);
  }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        The program will print A`,
        choice1: `A
        
        The program will print java.lang.String@XXX, where XXX is the memory location of the object a.`,
        choice2: `C
        
        The program will print B`,
        choice3: `D
        
        The program will not compile because the type of a, b, and c is Object.`,
        choice4: `E
        
        The program will print java.lang.String@XXX, where XXX is the hash code of the object a.`,
        choice5: ``,
        explination: `The variables a, b and c contain references to actual objects. Assigning to a reference only changes the reference value, and not the object pointed to by the reference. So, when c = a is executed c starts pointing to the string object containing A. and when a = b is executed, a starts pointing to the string object containing B but the object containing A still remains same and c still points to it. So the program prints A and not B.
        
        The Object class's toString generates a string using:  getClass().getName() + '@' + Integer.toHexString(hashCode())
        But in this case, String class overrides the toString() method that returns just the actual string value.
        
        Answer option D is incorrect. String is an Object as well. You can always assign an object of the subclass to a super class reference without a cast.`,
    }, {
        questionNum: 1,
        questionInstructions: `Identify the correct statements.
        
        Each correct answer represents a complete solution. Choose all that apply.`,
        question: `class Test{
  public static void main(String[] args){
    short s = 10;   // 1
    char c = s;     // 2
    s = c;          // 3
  }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `A
        
        Line 3 is not valid.`,
        answer2: `B
        
        Line 2 is not valid.`,
        choice1: `C
        
        It will compile because both short and char can hold 10.`,
        choice2: `D
        
        None of the lines 1, 2 and 3 is valid.`,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: `Not all short values are valid char values, and neither are all char values valid short values, therefore compiler complains for both the lines 2 and 3. They will require an explicit cast.
        
        Answer option D is incorrect. Line 1 is valid because 10 is a constant and can fit into a short.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will be the output when the following class is compiled and run?
        `,
        question: `class ScopeTest{
   static int x = 5;
   public static void main(String[] args){
      int x  = ( x=3 ) * 4;  // 1
      System.out.println(x);
   }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        It will print 12.`,
        choice1: `E
        
        It will print 3 .`,
        choice2: `C
        
        It will not compile because there is an ambiguous reference to x.`,
        choice3: `B
        
        It will not compile because x is used before initialization.`,
        choice4: `A
        
        It will not compile because line //1 cannot be parsed correctly.`,
        choice5: ``,
        explination: `x is first initialized by x = 3, then the value of this expression (i.e. "x = 3"), which is 3, is multiplied by 4 and is again assigned to x. So it prints 12.
        
        Answer option B is incorrect. It is not.
        
        Answer option C is incorrect. There is no conflict for resolution of x. The local 'x' simply shadows the member variable 'x'.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which is the correct sequence of the digits that will be printed when B is run?`,
        question: `class A{
public A() { }
public A(int i) {   System.out.println(i );    }
}
class B{
static A s1 = new A(1);
A a = new A(2);
public static void main(String[] args){
     B b = new B();
     A a = new A(3);
}
static A s2 = new A(4);
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        1 ,4, 2 ,3`,
        choice1: `A
        
        1 ,2 ,3 4.`,
        choice2: `C
        
        3, 1, 2, 4`,
        choice3: `D
        
        2, 1, 4, 3`,
        choice4: `E
        
        2, 3, 1, 4`,
        choice5: ``,
        explination: `The order of initialization of a class is:
        All static constants, variables and blocks.(Among themselves the order is the order in which they appear in the code.)
        All non static constants, variables and blocks.(Among themselves the order is the order in which they appear in the code.)
        Constructor.`,
    }, {
        questionNum: 1,
        questionInstructions: ` Question 10 : After which line will the object created at line XXX be eligible for garbage collection?`,
        question: `public Object getObject(Object a) //0
   {
Object b = new Object();  //XXX
Object c, d = new Object(); //1
c = b; //2
b = a = null; //3
return c; //4
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        Never in this method.`,
        choice1: `E
        
        Cannot be determined.`,
        choice2: `C
        
        //4`,
        choice3: `B
        
        //3`,
        choice4: `A
        
        //2`,
        choice5: ``,
        explination: `Note that at line 2, c is assigned the reference of b. i.e. c starts pointing to the object created at //XXX. So even if at //3 b and a are set to null, the object is not without any reference.
        Also, at //4 c is being returned. So the object referred to by c cannot be garbage collected in this method!
        `,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following is illegal?`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `byte b = 320;`,
        choice1: `float f = 22.0f/7.0f;`,
        choice2: `None of these`,
        choice3: `char c = 320;`,
        choice4: `float f = 320;`,
        choice5: `double d = 320;`,
        explination: `320 cannot fit into a byte so you must cast it.: byte b = (byte) 320;
        
        Answer option A is incorrect. This is valid because 320 is below the maximum value that a char can take, which is 2^16 -1. Remember that char can take only positive values.
        
        Answer option B is incorrect. 320 is an int and any valid int can be assigned to a float or a double variable without a cast. Note that f = 320.0 is not valid as 320.0 would be a double and a double can only be assigned to a double without a cast.
        
        Answer option C is incorrect. This is valid because any valid int can be assigned to a double or even a float without any cast.
        
        Answer option E is incorrect. Since both the operands of / are floats, it will result in a float, which can be assigned to f.
        If you have, 22.0f/7.0, then it would not compile because 7.0 is a double and so 22.0f/7.0 will return a double, which cannot be assigned to a float.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the lines will cause a compile time error in the following program?
        `,
        question: `public class MyClass{
public static void main(String args[]){
char c;
int i;
c = 'a';//1
i = c;  //2
i++;    //3
c = i;  //4
c++;    //5
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        line 4`,
        choice1: `E
        
        line 5`,
        choice2: `C
        
        line 3`,
        choice3: `B
        
        line 2`,
        choice4: `A
        
        line 1`,
        choice5: ``,
        explination: `Answer option D is correct.
        A char value can ALWAYS be assigned to an int variable, since the int type is wider than the char type. So line 2 is valid.
        Line 4 will not compile because it is trying to assign an int to a char. Although the value of i can be held by the char but since 'i' is not a constant but a variable, implicit narrowing will not occur.
        Here is the rule given in JLS:
        A narrowing primitive conversion may be used if all of the following conditions are satisfied:
        The expression is a constant expression of type int.
        The type of the variable is byte, short, or char.
        The value of the expression (which is known at compile time, because it is a constant expression) is representable in the type of the variable.
        Note that narrowing conversion does not apply to long or double.
        so, char ch = 30L; will fail although 30 is representable by a char.`,
    }, {
        questionNum: 1,
        questionInstructions: `What happens when you try to compile and run the following class?`,
        question: `public class TestClass{
public static void main(String[] args) throws Exception{
      int a = Integer.MIN_VALUE;
      int b = -a;
      System.out.println( a+ "   "+b);
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        It will print two same negative numbers.`,
        choice1: `A
        
        It throws an OverFlowException.`,
        choice2: `C
        
        It will print two different negative numbers.`,
        choice3: `D
        
        It will print one negative and one positive number of same magnitude.`,
        choice4: `E
        
        It will print one negative and one positive number of different magnitude.`,
        choice5: ``,
        explination: `Answer option B is correct.
        
        It prints: -2147483648   -2147483648
        
        This happens because negative integers are stored in 2's complement form (complement the bits and add 1). For example:
        
        Integer 1 in binary is  00000000 00000000 00000000 00000001  (32 bits)
        
        So -1 in binary would be (complement the bits for 1 and add 1) :
        
        Step 1 (complement the bits of 1): 11111111 11111111 11111111 11111110  
        Step 2 (add 1 to step 1): 11111111 11111111 11111111 11111111.
        
        Now, let's see what happens in this question:
        
        a = Integer.MIN_VALUE = 10000000 00000000 00000000 00000000
        
        To get -a, apply the above two steps:
        
        Step 1  (complement the bits): 011111111 11111111 11111111 11111111
        Step 2 (add 1) : 10000000 00000000 00000000 00000000
        
        So you got the exact same value that you started with!
        
        (Note that you can see the binary form of an integer using Integer.toBinaryString(i) method.)`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following class print?`,
        question: `class InitTest{
   public static void main(String[] args){
  int a = 10;
  int b = 20;
  a += (a = 4);
  b = b + (b = 5);
  System.out.println(a+ ",  "+b);
   }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `E
        
        It will print 14, 25`,
        choice1: `D
        
        It will print 4, 25`,
        choice2: `C
        
        It will print 14, 5`,
        choice3: `B
        
        It will print 4, 5`,
        choice4: `
        A
        
        It will print 8, 25`,
        choice5: ``,
        explination: `a += (a =4) is same as a = a + (a=4).
        First, a's value of 10 is kept aside and (a=4) is evaluated. The statement (a=4) assigns 4 to a and the whole statement returns the value 4. Thus, 10 and 4 are added and assigned back to a.
        
        Same logic applies to b = b + (b = 5); as well.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will it print?`,
        question: `static int mx(int s) {
for (int i = 0; i < 3; i++) {
s = s + i;
}
return s;
}

int s = 5;
s += s + mx(s) + ++s;
System.out.println(s); `,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        24`,
        choice1: `A
        
        21`,
        choice2: `B
        
        22`,
        choice3: `C
        
        23`,
        choice4: `E
        
        25`,
        choice5: `F
        
        26`,
        explination: `s += (expression) will be converted to s =  s + expression. So the given expression will become:
        s = s + s + mx(s) + ++s;
        s = 5 + 5 + mx(5) + 6;
        s = 5 + 5+ 8 + 6;
        s = 24;
        `,
    }, {
        questionNum: 1,
        questionInstructions: `What is the result of executing the following fragment of code:`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        It will print false;`,
        choice1: `A
        
        Compile time error.`,
        choice2: `B
        
        It will print true;`,
        choice3: `D
        
        Runtime error.`,
        choice4: `E
        
        It will print nothing.`,
        choice5: ``,
        explination: `Answer option C is correct.
        
        All an if() needs is a boolean. Now, b1 != b2 returns false which is a boolean and so the expression becomes b2 = false.It returns false which is again a boolean. So there is no error and it prints false.
        Remember that every expression has a return value (which is actually the Left Hand Side of the expression). For example, The value of the expressing i = 10 , is 10 (an int).`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print?`,
        question: `int i = 0;
int j = 1;
if( (i++ == 0) & (j++ == 2) ){
i = 12;
}
System.out.println(i+" "+j);`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `A
        
        1 2`,
        choice1: `B
        
        2 3`,
        choice2: `C
        
        12 2`,
        choice3: `D
        
        12 1`,
        choice4: `E
        
        It will not compile.`,
        choice5: ``,
        explination: ` Answer option A is correct.
        
        This question is based on 2 concepts:
        i = ++j; is not same as i = j++;
        In the case of i = ++j, j is first incremented and then compared with i. While in the case of i = j++;, j is first compared with i and then incremented.
        The | and & operators, when applied to boolean operands, ensure that both the sides are evaluated. This is opposed to || and && operators, which do not evaluate the Right Hand Side operand if the result can be known by just evaluating the Left Hand Side.
        Now, let us see the values of i and j at each step:
        
        int i = 0;
        int j = 1;
        if( (i++ == 0) & (j++ == 2) )//compare i with 0 and increment i => returns true and i becomes 1. Evaluate next condition:
        //compare j with 2 and increment j => return false and j becomes 2.
        //true & false returns false so i= 12 is not executed.{
        i = 12;
        }
        System.out.println(i+" "+j)); //print 1 and 2`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following are true about the enhanced for loop?
        
        Each correct answer represents a complete solution. Choose all that apply.`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `A
        
        It can iterate over an array or a Collection but not a Map.`,
        answer2: `B
        
        Using an enhanced for loop prevents the code from going into an infinite loop.`,
        choice1: `C
        
        Using an enhanced for loop on an array may cause infinite loop.`,
        choice2: `D
        
        An enhanced for loop can iterate over a Map.`,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: `An enhanced for loop needs either an array or an object of a class that implements java.lang.Iterable. Map does not implement Iterable, though you can use keySet() or values() methods to get a Collection (which extends Iterable) and then iterate over that Collection.
        
        Since there is no explicit condition check written in the code, it provides less opportunity to write code that causes infinite loop. 
        
        Unlike in a regular for loop, there is no iteration variable available in an enhanced for loop, so it is not possible to determine the number of the iteration just by using the enhanced for loop. You will need to do something like:
        
        int i = 0;
        for(Object obj : collectionOrArray){
        System.out.println("Iteration number = "+i+" Object = "+obj);
        i++;
        }
        Answer options A, B are correct.
        `,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following program print?`,
        question: `class Test{
public static void main(String args[]){
int i=0, j=0;
X1: for(i = 0; i < 3; i++){
      X2: for(j = 3; j > 0; j--){
          if(i < j) continue X1;
          else break X2;
      }
}
System.out.println(i+" "+j);
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        3 3`,
        choice1: `E
        
        2 2`,
        choice2: `A
        
        0 3`,
        choice3: `B
        
        0 2`,
        choice4: `C
        
        3 0`,
        choice5: ``,
        explination: `The statement:if(i < j) continue X1; else break X2;  only makes sure that the inner loop does not iterate more than once. i.e. for each iteration of i, j only takes the value of 3 and then the j loop terminates, either because of continue X1; or because of break X2;.
        Now, the point to remember here is that when the loop for(i = 0; i < 3; i++) ends, the value of i is 3 and not 2.
        Similarly, if there were no statement inside inner loop, the value of j after the end of the loop would have been 0 and not 1.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of these combinations of switch expression types and case label value types are legal within a switch statement?`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `A
        
        switch expression of type int and case label value of type char.`,
        choice1: `B
        
        switch expression of type float and case label value of type int.`,
        choice2: `C
        
        switch expression of type byte and case label value of type float.`,
        choice3: `D
        
        switch expression of type char and case label value of type byte.`,
        choice4: `E
        
        switch expression of type boolean and case label value of type boolean.`,
        choice5: ``,
        explination: `You should remember the following rules for a switch statement:
        Only String, byte, char, short, int, and enum values can be used as types of a switch variable. (String is allowed since Java 7.) Wrapper classes Byte, Character, Short, and Integer are allowed as well.
        The case constants must be assignable to the switch variable. For example, if your switch variable is of class String, your case labels must use Strings as well.
        The switch variable must be big enough to hold all the case constants. For example, if the switch variable is of type char, then none of the case constants can be greater than 65535 because a char's range is from 0 to 65535. Similarly, the following will not compile because 300 cannot be assigned to 'by', which can only hold values from -128 to 127.
        byte by = 10;
        switch(by){
        case 200 ://some code;
        case 300 ://some code;
        }
        All case labels should be COMPILE TIME CONSTANTS. You cannot have variables as case labels.
        No two of the case constant expressions associated with a switch statement may have the same value.
        At most one default label may be associated with the same switch statement.
        Note that the following is invalid though because a char cannot be assigned to an Integer:
        Integer x = 1;// int x = 1; is valid.
        switch(x){
        case 'a' : System.out.println("a");
        }
        
        Answer option D is incorrect. This will not work in all cases because a byte may have negative values which cannot be assigned to a char. For example, char ch = -1; does not compile. Therefore, the following does not compile either:
        
        char ch = 'x';
        switch(ch){
        case -1 :System.out.println("-1"); break; // This will not compile : "possible loss of precision"
        default:System.out.println("default");
        }`,
    }, {
        questionNum: 1,
        questionInstructions: `What will be printed by the following code if it is run with command line: java TestClass -0.50?
        `,
        question: `public class TestClass {
public static double getSwitch(String str) {
return Double.parseDouble(str.substring(1, str.length() - 1));
}
public static void main(String args[]) {
switch (getSwitch(args[0])) {
      case 0.0:
          System.out.println( " Hello ");
      case 1.0:
          System.out.println( " World ");
          break;
      default:
          System.out.println( " Good Bye ");
}
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `E
        
        None of these.`,
        choice1: `A
        
        Hello`,
        choice2: `B
        
        World`,
        choice3: `C
        
        Hello World`,
        choice4: `D
        
        Hello World Good Bye`,
        choice5: ``,
        explination: `Answer option E is correct.
        
        Observe that the method getSwitch() has been declared to return a double. Its return value is being used in the switch statement. Therefore, the program will not even compile because double/float/long/boolean cannot be used in a switch statement.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print when run?`,
        question: `public class TestClass {
public void switchString(String input) {
switch (input) {
      case "a":
          System.out.println("apple");
      case "b":
          System.out.println("bat");
          break;
      case "B":
          System.out.println("big bat");
      default:
          System.out.println("none");
}
}
public static void main(String[] args) throws Exception {
TestClass tc = new TestClass();
tc.switchString("B");
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        big bat
        none`,
        choice1: `A
        
        bat
        big bat`,
        choice2: `C
        
        big bat`,
        choice3: `D
        
        bat`,
        choice4: `E
        
        The code will not compile.`,
        choice5: ``,
        explination: `The switch statement compares the String object in its expression with the expressions associated with each case label as if it were using the String.equals method; consequently, the comparison of String objects in switch statements is case sensitive. The Java compiler generates generally more efficient bytecode from switch statements that use String objects than from chained if-then-else statements.
        
        Since there is a case condition that matches the input string "B", that case statement will be executed directly. This prints "big bat". Since there is no break after this case statement and the next case statement, the control will fall through the next one (which is default : ) and so "none" will be printed as well.
        
        Note that "b" and "B" are different strings. "B" is not equal to "b".
        `,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print?
        `,
        question: `boolean flag = true;
if(flag = false){
System.out.println("1");
}else if(flag){
System.out.println("2");
}else if(!flag){
System.out.println("3");
}else System.out.println("4");`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        3`,
        choice1: `A
        
        1`,
        choice2: `B
        
        2`,
        choice3: `D
        
        4`,
        choice4: `E
        
        Compilation error.`,
        choice5: ``,
        explination: `At the beginning, flag is true. In the first if, we do flag = false. Notice that it is not flag == false. It is a single =, which assigns false to flag. Thus, flag becomes false and the condition becomes false therefore 1 is not printed. In the first 'else if', again since flag is false, 2 is not printed. In second 'else if', !flag implies !false, which is true, so 3 is printed. Finally, since an else-if condition has been satisfied, the last else is not executed.`,
    }, {
        questionNum: 1,
        questionInstructions: `INT1 and INT2 can be any two integers.
        
        Which of the following will produce the same result?`,
        question: `for(int i=INT1; i<INT2; i++){
System.out.println(i);
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `E
        
        None of these.`,
        choice1: `D
        
        int i=INT1; do { System.out.println(i); }while(i++<INT2);`,
        choice2: `C
        
        int i=INT1; while(i++<INT2) { System.out.println(i); }`,
        choice3: `B
        
        for(int i=INT1; i++<INT2; System.out.println(i));`,
        choice4: `A
        
        for(int i=INT1; i<INT2; System.out.println(++i));`,
        choice5: ``,
        explination: `In such a question it is best to take a sample data such as INT1=1 and INT2=3 and execute the loops mentally. Eliminate the wrong options. In this case, the original loop will print:
        =====ORIGINAL ====
        1
        
        2
        
        Outputs of all the options are given above (Ignoring the line breaks).
        
        Thus, none of them is same as the original.
        
        Answer option A is incorrect. Prints: 2 and 3
        
        Answer option B is incorrect. Prints: 2 and 3
        
        Answer option C is incorrect. Prints: 2 and 3
        
        Answer option D is incorrect. Prints: 1 2 and 3`,
    }, {
        questionNum: 1,
        questionInstructions: `What can be inserted in the following code so that it will print exactly 2345 when compiled and run?
        
        Each correct answer represents a complete solution. Choose two.`,
        question: `public class FlowTest {
static int[] data = {1, 2, 3, 4, 5};
public static void main(String[] args) {
for (int i: data) {
      if (i < 2) { 
        //insert code1 here
      }
      System.out.print(i);
      if (i == 3) { 
        // insert code2 here
      }
}
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `B
        
        continue;
        and
        //nothing is required`,
        answer2: `C
        
        continue;
        and
        continue;`,
        choice1: `A
        
        break;
        and
        //nothing is required`,
        choice2: `D
        
        break;
        and
        continue;`,
        choice3: `E
        
        break;
        and
        break;`,
        choice4: ``,
        choice5: ``,
        explination: `Answer options B and C are correct.
        
        This is a very simple loop to follow if you know what break and continue do.
        break breaks the nearest outer loop. Once a break is encountered, no further iterations of that loop will execute.
        continue simply starts the next iteration of the loop. Once a continue is encountered, rest of the statements within that loop are ignored (not executed ) and the next iteration is started.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will be the result of attempting to compile and run the following program?
        `,
        question: `class TestClass{
public static void main(String args[]){
int i = 0;
for (i=1 ;  i<5  ; i++) continue;  //(1)
for (i=0 ;       ; i++) break;       //(2)
for (    ; i<5?false:true ;    );     //(3)
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `A
        
        The code will compile without error and will terminate without problems when run.`,
        choice1: `B
        
        The code will fail to compile, since the continue can't be used this way.`,
        choice2: `C
        
        The code will fail to compile, since the break can't be used this way`,
        choice3: `D
        
        The code will fail to compile, since the for statement in the line 2 is invalid.`,
        choice4: `E
        
        The code will compile without error but will never terminate.`,
        choice5: ``,
        explination: `Answer option A is correct.
        
        A continue statement can occur in and only in a for, while or do-while loop. A continue statement means: Forget about the rest of the statements in the loop and start the next iteration.
        So,
        for (i=1 ;i<5; i++) continue; just increments the value of i up to 5 because of i++.
        
        for (i=0 ;; i++) break; iterates only once because of the break so the value of i becomes 0.
        
        for (; i<5?false:true ;); never iterates because i is less than 5 (it is 0 because of //2) and the condition expression is false!
        
        At the end of the code, the value of i is 0.
        
        Answer option E is incorrect. the condition part is 'false' so the control will never go inside the loop.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print?`,
        question: `String abc = "";
    abc.concat("abc");
    abc.concat("def");
    System.out.print(abc);`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        It will print empty string (or in other words, nothing).`,
        choice1: `E
        
        It will not compile because there is no concat() method in String class.
        `,
        choice2: `A
        
        abc`,
        choice3: `B
        
        abcdef`,
        choice4: `C
        
        def`,
        choice5: ``,
        explination: `Answer option D is correct.
        
        Strings are immutable so doing abc.concat("abc") will create a new string "abc" but will not affect the original string "".`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print?`,
        question: `System.out.println("12345".charAt(6));`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `F
        
        It will throw an IndexOutOfBoundsException`,
        choice1: `E
        
        It will throw a StringOutOfBoundsException.`,
        choice2: `D
        
        It will throw an ArrayIndexOutOfBoundsException.`,
        choice3: `C
        
        -1`,
        choice4: `B
        
        null`,
        choice5: `A
        
        5`,
        explination: `Answer option F is correct.
        
        Since indexing starts with 0, the maximum value that you can pass to charAt is length-1.
        
        As per the API documentation for charAt, it throws IndexOutOfBoundsException if you pass an invalid value (that is, if the index argument is negative or not less than the length of this string).
        
        Both - ArrayIndexOutOfBoundsException and StringIndexOutOfBoundsException, extend IndexOutOfBoundsException and although in practice, the charAt method throws StringIndexOutOfBoundsException, it is not a valid option because the implementation is free to throw some other exception as long as it is an IndexOutOfBoundsException.
        
        (There are questions on the exam on this aspect.)
        
        As per the API documentation of this method ( http://docs.oracle.com/javase/6/docs/api/java/lang/String.html#charAt(int) ), this method throws IndexOutOfBoundsException. Although, in practice the method throws StringIndexOutOfBoundsException, which is a subclass of IndexOutOfBoundsException, the implementation is free to throw some other subclass of IndexOutOfBoundsException. Thus, you should rely only on the published API documentation instead of what it actually throws.
        
        Answer option E is incorrect. There is no such exception. The correct name is StringIndexOutOfBoundsException. But that is also not the correct answer.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print?`,
        question: `public class TestClass{
        int x = 5;
        int getX(){ return x; }

        public static void main(String args[]) throws Exception{
            TestClass tc = new TestClass();
            tc.looper();
            System.out.println(tc.x);
        }
        
        public void looper(){
            int x = 0;
            while( (x = getX()) != 0 ){
                for(int m = 10; m>=0; m--){
                    x = m;
                }
            }
            
       }     
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `E
        
        None of these.`,
        choice1: `A
        
        It will not compile.`,
        choice2: `B
        
        It will throw an exception at runtime.`,
        choice3: `C
        
        It will print 0.`,
        choice4: `D
        
        It will print 5.`,
        choice5: ``,
        explination: `Answer option E is correct.
        
        Note that looper() declares an automatic variable x, which shadows the instance variable x. So when x = m; is executed, it is the local variable x that is changed not the instance field x. So getX() never returns 0. If you remove int x = 0; from looper(), it will print 0 and end.
        
        This program will compile and run but will never terminate.`,
    }, {
        questionNum: 1,
        questionInstructions: `What is the result of compiling and running the following code?
        `,
        question: `public class TestClass{
   static int si = 10;
   public static void main (String args[]){
      new TestClass();
   }
   public TestClass(){
      System.out.println(this);
   }
   public String toString(){
      return "TestClass.si = "+this.si;
   }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        It will print TestClass.si = 10`,
        choice1: `E
        
        None of these.`,
        choice2: `A
        
        The class will not compile because you cannot override toString() method.`,
        choice3: `B
        
        The class will not compile as si being static, this.si is not a valid statement.`,
        choice4: `C
        
        It will print TestClass@nnnnnnnn, where nnnnnnn is the hash code of the TestClass object referred to by 'this'.`,
        choice5: ``,
        explination: `Answer option D is correct.
        
        The toString method for class Object returns a String consisting of the name of the class of which the object is an instance, the at-sign character '@', and the unsigned hexadecimal representation of the hash code of the object. In other words, this method returns a string equal to the value of:
        getClass().getName() + '@' + Integer.toHexString(hashCode())
        
        Answer option A is incorrect. You sure can. toString() is defined as public and non-final method in Object class.
        
        Answer option B is incorrect. static member can be accessed by static and non-static methods both. Non-static can only be accessed by non-static.
        
        Answer option C is incorrect. It would have been correct if toString() were not overridden. This is the behavior of the toString() provided by Object class.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of these expressions will obtain the substring "456" from a string defined by String str = "01234567"?`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `A
        
        str.substring(4, 7)`,
        choice1: `B
        
        str.substring(4)`,
        choice2: `C
        
        str.substring(3, 6)`,
        choice3: `D
        
        str.substring(4, 6)`,
        choice4: `E
        
        str.substring(4, 3)`,
        choice5: ``,
        explination: `Answer option A is correct.
        
        Read this carefully:
        public String substring(int beginIndex, int endIndex)
        Returns a new string that is a substring of this string. The substring begins at the specified beginIndex and extends to the character at index endIndex - 1. Thus the length of the substring is endIndex-beginIndex. 
        
        "hamburger".substring(4, 8) returns "urge"
        "smiles".substring(1, 5) returns "mile"
        "unhappy".substring(2) returns "happy"
        "Harbison".substring(3) returns "bison"
        "emptiness".substring(9) returns "" (an empty string)
        
        Answer option B is incorrect. It will return "4567".
        
        Answer option C is incorrect. It will return "345".
        
        Answer option D is incorrect. It will return "45".
        
        Answer option E is incorrect. Exception in thread "main" java.lang.StringIndexOutOfBoundsException: String index out of range: -1
        `,
    }, {
        questionNum: 1,
        questionInstructions: `Assuming that the following method will always be called with a phone number in the format ddd-ddd-dddd (where d stands for a digit), what can be inserted at //1 so that it will return a String containing the same number except its last four digits will be masked with xxxx?
        
        Each correct answer represents a complete solution. Choose all that apply.`,
        question: `public static String hidePhone(String fullPhoneNumber){
  //1 Insert code here
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `A
        
        return new StringBuilder(fullPhoneNumber).substring(0, 8)+"xxxx";`,
        answer2: `B
        
        return new StringBuilder(fullPhoneNumber).replace(8, 12, "xxxx").toString();`,
        choice1: `C
        
        return new StringBuilder(fullPhoneNumber).append("xxxx", 8, 12).toString();`,
        choice2: `D
        
        return new StringBuilder("xxxx").append(fullPhoneNumber, 0, 8).toString();`,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: `Answer options A, B are correct.
        
        This is a simple question if you know how the various methods of StringBuilder operate. You need to go through the JavaDoc API descriptions of the methods used in this question. This is important for the exam. The following are the details for your convenience -
        --------------------------
        public StringBuilder append(CharSequence s, int start, int end)
        Appends a subsequence of the specified CharSequence to this sequence.
        Characters of the argument s, starting at index start, are appended, in order, to the contents of this sequence up to the (exclusive) index end. The length of this sequence is increased by the value of end - start.
        Let n be the length of this character sequence just prior to execution of the append method. Then the character at index k in this character sequence becomes equal to the character at index k in this sequence, if k is less than n; otherwise, it is equal to the character at index k+start-n in the argument s.
        If s is null, then this method appends characters as if the s parameter was a sequence containing the four characters "null".
        
        Parameters:
        s - the sequence to append. start - the starting index of the subsequence to be appended. end - the end index of the subsequence to be appended.
        
        Returns:
        a reference to this object.
        
        Throws:
        IndexOutOfBoundsException - if start is negative, or start is greater than end or end is greater than s.length()
        
        --------------------------
        
        public StringBuilder insert(int dstOffset, CharSequence s, int start, int end)
        Inserts a subsequence of the specified CharSequence into this sequence.
        The subsequence of the argument s specified by start and end are inserted, in order, into this sequence at the specified destination offset, moving up any characters originally above that position. The length of this sequence is increased by end - start.
        The character at index k in this sequence becomes equal to:
        the character at index k in this sequence, if k is less than dstOffset
        the character at index k+start-dstOffset in the argument s, if k is greater than or equal to dstOffset but is less than dstOffset+end-start
        the character at index k-(end-start) in this sequence, if k is greater than or equal to dstOffset+end-start
        The dstOffset argument must be greater than or equal to 0, and less than or equal to the length of this sequence.
        The start argument must be nonnegative, and not greater than end.
        The end argument must be greater than or equal to start, and less than or equal to the length of s.
        If s is null, then this method inserts characters as if the s parameter was a sequence containing the four characters "null".
        
        Parameters:
        dstOffset - the offset in this sequence. s - the sequence to be inserted. start - the starting index of the subsequence to be inserted. end - the end index of the subsequence to be inserted.
        
        Returns:
        a reference to this object.
        
        Throws:
        IndexOutOfBoundsException - if dstOffset is negative or greater
        
        --------------------------
        
        public StringBuilder replace(int start, int end, String str)
        Replaces the characters in a substring of this sequence with characters in the specified String. The substring begins at the specified start and extends to the character at index end - 1 or to the end of the sequence if no such character exists. First the characters in the substring are removed and then the specified String is inserted at start. (This sequence will be lengthened to accommodate the specified String if necessary.)
        
        Parameters:
        start - The beginning index, inclusive. end - The ending index, exclusive. str - String that will replace previous contents.
        
        Returns:
        This object.
        
        Throws:
        StringIndexOutOfBoundsException - if start is negative, greater than length(), or greater than end.
        
        --------------------------
        
        public String substring(int start, int end)
        Returns a new String that contains a subsequence of characters currently contained in this sequence. The substring begins at the specified start and extends to the character at index end - 1.
        
        Parameters:
        start - The beginning index, inclusive. end - The ending index, exclusive.
        
        Returns:
        The new string.
        
        Throws:
        StringIndexOutOfBoundsException - if start or end are negative or greater than length(), or start is greater than end.
        
        Answer option C is incorrect. This will actually throw an IndexOutOfBoundsException because the call to append will look for characters starting from index 8 to 11 in string "xxxx", which has only 4 characters.
        
        Answer option D is incorrect. This will return xxxxddd-ddd-.
        `,
    }, {
        questionNum: 1,
        questionInstructions: `What will be the output of the following program when it is compiled and run with the command line:`,
        question: `java TestClass 1 2 3

public class TestClass {

    public static void main(String[] args) {
        System.out.println("Values : "+args[0]+args[1]);
    }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        Values : 12`,
        choice1: `D
        
        Values : 23`,
        choice2: `E
        
        Values : 3`,
        choice3: `A
        
        Values : java TestClass`,
        choice4: `B
        
        Values : TestClass 1`,
        choice5: ``,
        explination: `In Java, command line arguments are passed into the program using the String[] parameter to the main method. The String array contains actual parameters and does not include java and the name of the class.
        
        Therefore, in this case, args will point to an array of Strings with 3 elements - "1", "2", and "3". The program prints out only args[0] and args[1], which are 1 and 2.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the value of 'harry' if the program is run from the command line:
        java TestClass 111 222 333`,
        question: `public class TestClass{
  public static void main(String[] args){
    String tom = args[0];
    String dick = args[1];
    String harry = args[2];
  }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        333`,
        choice1: `D
        
        It will throw an ArrayIndexOutOfBoundsException`,
        choice2: `E
        
        None of these.`,
        choice3: `A
        
        111`,
        choice4: `B
        
        222`,
        choice5: ``,
        explination: `Answer option C is correct.
        
        java and classname are not part of the args array. So tom gets "111", dick gets "222" and harry gets "333".`,
    }, {
        questionNum: 1,
        questionInstructions: `Identify correct statements about a two dimensional array.`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        It is basically an array of arrays.`,
        choice1: `C
        
        The number of rows and columns must be specified at the time it is declared.`,
        choice2: `B
        
        It is like a square matrix where number of rows and number of columns are same and each row or each column have the same number of elements.`,
        choice3: `A
        
        It is like a rectangular matrix where number of rows and number of columns may be different but each row or each column have the same number of elements.`,
        choice4: ``,
        choice5: ``,
        explination: `Answer option D is correct.
        
        Unlike some other languages, multi dimensional arrays in Java are not like matrices. They are just arrays of arrays. For example, if you have a two dimensional array then each element of this array is a one dimensional array. Each such array element is independent and therefore can be of different lengths (but not of different type). 
        
        Answer option C is incorrect. Size of the dimensions is required to be specified only at the time of instantiation and not at the time of declaration. For example,
        
        int[][] ia; //this is a valid declaration.
        int[][] ia = new int[2][3];//This is a valid declaration and a valid instantiation
        Further, only the size of the first dimension is required to be specified at the time of instantiation for an array of more than one dimension. Sizes of the other dimensions may be left out.
        
        int[][] iaa=new int[3][];
        int[][][] iaaa = new int[3][][]; //Both are valid. 
        This is allowed because a multi dimensional array in Java is just an array of arrays. They do not have to be symmetric, that is, each sub array is an independent array and so they do not have to be of the same size. So, in the above example, iaa[0] can be initialized to new int[5], and ia[1] to new int[10], while ia[2] can be left null.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following options can be used in the code above so that the init method initializes each table element to the sum of its row and column number and the multiply method just multiplies the element value by 2?`,
        question: `public class ArrayTest {

    static int[][] table = new int[2][3];

    public static void init() {
for (int x = 0; x < table.length; x++) {
    for (int y = 0; y < table[x].length; y++) {

//insert code to initialize

    }
}
    }

    public static void multiply() {
for (int x = 0; x < table.length; x++) {
    for (int y = 0; y < table[x].length; y++) {

//insert code to multiply

    }
}
    }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        table[x] [y] = x+y;
        and
        
        table[x] [y] = table[x] [y]*2;`,
        choice1: `A
        
        table[x, y] = x+y;
        and
        
        table[x, y] = table[x, y]*2;`,
        choice2: `C
        
        table[ [x] [y] ] = x+y;
        and
        
        table[ [x] [y] ] = table[ [x] [y] ]*2;
        `,
        choice3: `D
        
        table(x, y) = x+y;
        and
        
        table(x, y) = table(x, y)*2;`,
        choice4: ``,
        choice5: ``,
        explination: `Answer option B is correct.
        
        This code snippet illustrates correct syntax for accessing array elements in a multi dimensional array. All other options are syntactically incorrect and will not compile.`,
    }, {
        questionNum: 1,
        questionInstructions: `Given the following declaration, select the correct way to get the number of elements in the array, assuming that the array has been initialized.`,
        question: `int[] intArr;`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        intArr.length`,
        choice1: `D
        
        intArr[ ].size( )`,
        choice2: `E
        
        intArr.size( )`,
        choice3: `A
        
        intArr[ ].length( )`,
        choice4: `B
        
        intArr.length( )`,
        choice5: ``,
        explination: `Answer option C is correct.
        
        FYI, All types of arrays are objects. i.e. intArr instanceof Object is true.
        
        Each array object has a member variable named public final length of type 'int' that contains the size of the array.
        `,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print?`,
        question: `public class Test{
    public static void testInts(Integer obj, int var){
obj = var++;
obj++;
    }
    public static void main(String[] args) {
Integer val1 = new Integer(5);
int val2 = 9;
testInts(val1++, ++val2);
System.out.println(val1+" "+val2);
    }
}   `,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        6 10`,
        choice1: `E
        
        5 11`,
        choice2: `A
        
        10 9`,
        choice3: `B
        
        10 10`,
        choice4: `C
        
        6 9`,
        choice5: ``,
        explination: `Answer option D is correct.
        
        There are multiple concepts at play here:
        All the wrapper objects are immutable. So when you do obj++, what actually happens is something like this:
        obj = new Integer( obj.intValue()  + 1);  
        val1++ uses post-increment operator, which implies that you note down the current value of val1, increment it, and then pass the original noted down value to the method testInts. Thus, the reference value of Integer 5 is passed to testInts. But val1 is set to point to a new Integer object containing 6.
        ++val2 uses pre-increment operator, which implies that you first increment val2 and then pass the incremented value. Therefore, val2 is incremented to 10 and then 10 is passed to the method testInts.
        Java uses pass by value semantics in method calls. In case of primitive variables, their values are passed, while in case of Objects, their reference values are passed.  Thus, when you assign a different object to reference variable in a method, the original reference variable that was passed from the calling method still points to the same object that it pointed to before the call.
        In this question, therefore, val1 in main still points to 6 after the call to testInts returns.`,
    }, {
        questionNum: 1,
        questionInstructions: `Identify the valid members of Boolean class.
        
        Each correct answer represents a complete solution. Choose all that apply.`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `A
        
        parseBoolean(String )`,
        answer2: `B
        
        valueOf(boolean )`,
        choice1: `C
        
        parseBoolean(boolean )`,
        choice2: `D
        
        Boolean(Boolean )`,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: `Answer options A, B are correct.
        
        You need to remember the following points about Boolean:
        Boolean class has two constructors - Boolean(String) and Boolean(boolean)
        The String constructor allocates a Boolean object representing the value true if the string argument is not null and is equal, ignoring case, to the string "true". Otherwise, allocate a Boolean object representing the value false. Examples: new Boolean("True") produces a Boolean object that represents true. new Boolean("yes") produces a Boolean object that represents false.
        
        The boolean constructor is self explanatory.
        Boolean class has two static helper methods for creating booleans - parseBoolean and valueOf.
        Boolean.parseBoolean(String ) method returns a primitive boolean and not a Boolean object (Note - Same is with the case with other parseXXX methods such as Integer.parseInt - they return primitives and not objects). The boolean returned represents the value true if the string argument is not null and is equal, ignoring case, to the string "true".
        
        Boolean.valueOf(String ) and its overloaded Boolean.valueOf(boolean ) version, on the other hand, work similarly but return a reference to either Boolean.TRUE or Boolean.FALSE wrapper objects. Observe that they dont create a new Boolean object but just return the static constants TRUE or FALSE defined in Boolean class.
        When you use the equality operator ( == ) with booleans, if exactly one of the operands is a Boolean wrapper, it is first unboxed into a boolean primitive and then the two are compared (JLS 15.21.2). If both are Boolean wrappers, then their references are compared just like in the case of other objects. Thus, new Boolean("true") == new Boolean("true") is false, but new Boolean("true") == Boolean.parseBoolean("true") is true.
        
        TRUE and FALSE are valid static members of Boolean class.
        Answer option D is incorrect. There is no constructor that takes a Boolean.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print when compiled and run?`,
        question: `import java.util.*;
public class TestClass {
    public static void main(String[] args) throws Exception {
        ArrayList<String> al = new ArrayList<String>();
        al.add("111");
        al.add("222");
        System.out.println(al.get(al.size()));
     }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        It will throw an IndexOutOfBoundsException at run time.`,
        choice1: `D
        
        222`,
        choice2: `E
        
        null`,
        choice3: `A
        
        It will not compile.`,
        choice4: `B
        
        It will throw a NullPointerException at run time.`,
        choice5: ``,
        explination: `Answer option C is correct.
        
        size() method of ArrayList returns the number of elements. Here, it returns 2. Since numbering in ArrayList starts with 0. al.get(2) will cause an IndexOutOfBoundsException to be thrown because only 0 and 1 are valid indexes for a list of size 2.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which import statement should be added to make it compile?`,
        question: `package x;
public class TestClass {
    ArrayList<String> al;
    public void init(){
        al = new ArrayList<>();
        al.add("Name 1");
        al.add("Name 2");
    }
    public static void main(String[] args) throws Exception {
        TestClass tc = new TestClass();
        tc.init();
        System.out.println("Size = "+tc.al.size());
    }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        import java.util.ArrayList;`,
        choice1: `D
        
        import java.collections.ArrayList;`,
        choice2: `E
        
        No import is necessary.`,
        choice3: `B
        
        import java.lang.ArrayList;`,
        choice4: `A
        
        import java.lang.*;`,
        choice5: ``,
        explination: `Answer option C is correct.
        
        Only java.lang package and the package in which the current class exists are automatically imported.
        Class ArrayList is in java.util package, which is not imported automatically.
        
        Note that classes in the default package (i.e. the package with no name) cannot be imported by classes in other (i.e. non default) packages. This is why you should not use the default package for creating classes.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following are true regarding the new Date-Time API of Java 8?
        
        Each correct answer represents a complete solution. Choose two.`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `A
        
        It uses the calendar system defined in ISO-8601 as the default calendar.`,
        answer2: `B
        
        Most of the actual date related classes in the Date-Time API such as LocalDate, LocalTime, and LocalDateTime are immutable.`,
        choice1: `C
        
        LocalDateTime include time zone information but LocalDate does not.`,
        choice2: `D
        
        To create a LocalDate or a LocalDateTime object, you can use one of their several constructors.`,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: `Answer options A and B are correct.
        
        This calendar is based on the Gregorian calendar system and is used globally as the defacto standard for representing date and time. The core classes in the Date-Time API have names such as LocalDateTime, ZonedDateTime, and OffsetDateTime. All of these use the ISO calendar system. 
        
        If you want to use an alternative calendar system, such as Hijrah or Thai Buddhist, the java.time.chrono package allows you to use one of the predefined calendar systems. Or you can create your own.
        
        These classes do not have any setters. Once created you cannot change their contents. Even their constructors are private.
        
        Answer option C is incorrect. None of LocalDate, LocalDateTime, or LocalTime store zone information.
        
        java.time.ZonedDateTime does. ZonedDateTime is an immutable representation of a date-time with a time-zone. This class stores all date and time fields, to a precision of nanoseconds, and a time-zone, with a zone offset used to handle ambiguous local date-times. For example, the value "2nd October 2007 at 13:45.30.123456789 +02:00 in the Europe/Paris time-zone" can be stored in a ZonedDateTime.
        
        Answer option D is incorrect. These classes do not have any public constructors. You need to use their static factory methods to get their instances.
        For example:
        java.time.LocalDate d1 = java.time.LocalDate.of(2015, Month.JANUARY, 31);
        
        java.time.LocalDateTime d2 = java.time.LocalDateTime.of(2015, Month.JANUARY, 31, 10, 56);
        
        java.time.LocalDateTime d3 = java.time.LocalDateTime.parse("2015-01-02T17:13:50");
        //Note that this will throw a  java.time.format.DateTimeParseException if the input string lacks the time component i.e.T17:13:50
        
        java.time.LocalDate d4 = java.time.LocalDate.parse("2015-01-02");
        //Note that this will throw a  java.time.format.DateTimeParseException if the input string contains the time component
        
        java.time.LocalTime d5 = java.time.LocalTime.parse("02:13:59.985");
        //Note that this will throw a  java.time.format.DateTimeParseException if the input string contains the Date component`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following lines will return the date string in ISO 8601 format?
        
        Each correct answer represents a complete solution. Choose all that apply.`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `B
        
        dt.format(java.time.format.DateTimeFormatter.ISO_DATE_TIME);`,
        answer2: `D
        
        dt.toString();`,
        choice1: `C
        
        dt.format(java.time.format.DateTimeFormatter.LOCAL_DATE_TIME);`,
        choice2: `A
        
        dt.format(java.time.format.DateTimeFormatter.DATE_TIME);`,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: `Answer options B and D are correct.
        
        LocalDateTime's toString method generates the String in ISO 8601 format.
        
        Answer option A is incorrect. DATE_TIME is not a valid formatter.
        
        Answer option C is incorrect. LOCAL_DATE_TIME is not a valid formatter. ISO_LOCAL_DATE_TIME is valid though, which is same as ISO_DATE_TIME except that it does not use the Zone or Offset. Details are not too important for the exam but you may check out the JavaDoc descriptions of both as they have good examples.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following statements can be inserted at // 1 to make the code compile without errors?`,
        question: `public class InitTest{
static int si = 10;
int  i;
final boolean bool;
// 1
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `E
        
        { bool = (si > 5); i = 1000; }`,
        choice1: `A
        
        instance { bool = true; }`,
        choice2: `B
        
        InitTest() { si += 10; }`,
        choice3: `C
        
        { si = 5; i = bool? 1000 : 2000;}`,
        choice4: `D
        
        { i = 1000; }`,
        choice5: ``,
        explination: `Answer option E is correct.
        
        A final variable must be initialized when an instance is constructed, or else the code will not compile. This can be done either in an instance initializer or in EVERY constructor.
        The keyword static is used to signify that a block is static initializer. If nothing is there before starting curly brace then it is an instance initializer.
        
        Answer option A is incorrect. you cannot put the word instance here. It is not a keyword.
        
        Answer option B is incorrect. It is a valid constructor but does not initialize bool, which is a final variable and must be initialized either in an instance block or in a constructor.
        
        Answer option C is incorrect. bool is not initialized. Therefore, it cannot be used !
        
        Answer option D is incorrect. bool remains uninitialized.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following correctly defines a method named stringProcessor that can be called by other programmers as follows: stringProcessor(str1) or stringProcessor(str1, str2) or stringProcessor(str1, str2, str3), where str1, str2, and str3 are references to Strings.`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        public void stringProcessor(String... strs){
        }`,
        choice1: `A
        
        public void stringProcessor(...String){
        }`,
        choice2: `C
        
        public void stringProcessor(String[] strs){
        }`,
        choice3: `D
        
        public void stringProcessor(String a, String b, String c){
        }`,
        choice4: `E
        
        Three separate methods need to be written.`,
        choice5: ``,
        explination: `Answer option B is correct.
        
        To allow a method to take variable arguments of a type, you must use the ... syntax: methodName( <type>... variableName);
        Remember that there can be only one vararg argument in a method. Further, the vararg argument must be the last argument.
        So this is invalid: stringProcessor( String... variableName, int age);
        but this is valid: stringProcessor(int age, String... variableName);
        
        Though not important for this exam, it is good to know that within the method, the vararg argument is treated like an array:
        public void stringProcessor(String... names){
           for (String n : names) {
               System.out.println("Hello " + n);
           }
        }`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following program print when run?`,
        question: `public class ChangeTest {

   private int myValue = 0;
   
   public void showOne(int myValue){
       myValue = myValue;
       System.out.println(this.myValue);
   }
   
   public void showTwo(int myValue){
       this.myValue = myValue;
       System.out.println(this.myValue);
   }    
   public static void main(String[] args) {
       ChangeTest ct = new ChangeTest();
       ct.showOne(100);
       ct.showTwo(200);
   }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        0 followed by 200.`,
        choice1: `D
        
        100 followed by 200.`,
        choice2: `B
        
        100 followed by 100.`,
        choice3: `A
        
        0 followed by 100.`,
        choice4: ``,
        choice5: ``,
        explination: `Answer option C is correct.
        
        There are a couple of important concepts in this question:
        Within an instance method, you can access the current object of the same class using 'this'. Therefore, when you access this.myValue, you are accessing the instance member myValue of the ChangeTest instance.
        Within the showOne() method, there are two variables accessible with the same name myValue. If you declare a local variable (or a method parameter) with the same name as the instance field name, the local variable "shadows" the member field. One is the method parameter and another is the member field of ChangeTest object. Ideally, you should be able to access the member field in the method directly by using the name of the member (in this example, myValue). However, because of shadowing, when you use myValue, it refers to the local variable instead of the instance field.
        Therefore, when you do : myValue = myValue; you are actually assigning the value contained in method parameter myValue to itself. You are not changing the member field myValue. Hence, when you do System.out.println(this.myValue); in the next line, it prints 0.
        
        Now, in showTwo(), you are assigning the value contained in myValue (i.e. 200) to this.myValue, which is the instance member.  Therefore, in the next line, when you print this.myValue, it prints 200.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following program print?`,
        question: `public class TestClass{
static int someInt = 10;
public static void changeIt(int a){
   a = 20;
}
public static void main(String[] args){
   changeIt(someInt);
   System.out.println(someInt);
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `A
        
        10`,
        choice1: `B
        
        20`,
        choice2: `C
        
        It will not compile.`,
        choice3: `D
        
        It will throw an exception at runtime.`,
        choice4: `E
        
        None of these.`,
        choice5: ``,
        explination: `Answer option A is correct.
        
        In case of primitives such an an int, it is the value of the primitive that is passed. For example, in this question, when you pass someInt to changeIt method, you are actually passing the value 10 to the method, which is then assigned to method variable 'a'. In the method, you assign 20 to 'a'. However, this does not change the value contained in someInt. someInt still contains 10. Therefore, 10 is printed.
        
        Theoretically, java supports pass by value for everything ( i.e. primitives as well as Objects).
        
        Primitives are always passed by value.
        Object "references" are passed by value. So it looks like the object is passed by reference but actually it is the value of the reference that is passed.
        
        An example:
        
        Object o1 = new Object(); //Let us say, the object is stored at memory location 15000.
        //Since o1 actually stores the address of the memory location where the object is stored, it contains 15000.
        
        Now, when you call someMethod(o1); the value 15000 is passed to the method.
        
        Inside the method someMethod():
        
        someMethod( Object localVar) {
        /*localVar now contains 15000, which means it also points to the same memory location where the object is stored.
        Therefore, when you call a method on localVar, it will be executed on the same object.
        However, when you change the value of localVar itself, for example if you do localVar=null,
        it then it starts pointing to a different memory location. But the original variable o1 still
        contains 15000 so it still points to the same object. */
        }
        If you need even more detailed explanation, please check http://www.javaranch.com/campfire/StoryPassBy.jsp`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following program print when compiled and run:`,
        question: `public class TestClass {
public static void main(String[] args) {
someMethod();
}

static void someMethod(Object parameter)  {
  System.out.println("Value is "+parameter);
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `A
        
        It will not compile.`,
        choice1: `B
        
        Value is null`,
        choice2: `C
        
        Value is`,
        choice3: `D
        
        It will throw a NullPointerException at run time.`,
        choice4: ``,
        choice5: ``,
        explination: `Answer option A is correct.
        
        To call someMethod(Object parameter), you must pass exactly one parameter. So someMethod() is not a valid call to this method and the code will not compile.
        Note that parameter will not be assigned a null or default value.
        
        However, if the method were declared to take variable number of arguments, it would have been valid to call it without any parameters. For example:
        
        public static void someMethod(Object... params){
        System.out.println(params.length);
        }
        
        In this case, calling someMethod() without any parameter will print 0. i.e. the length of params array will be 0. params will NOT be null.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following methods does not return any value?`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        public void doStuff() throws FileNotFoundException, IllegalArgumentException{
                //valid code not shown
        } `,
        choice1: `E
        
        private doStuff() {
                //valid code not shown
        } `,
        choice2: `A
        
        public doStuff() throws FileNotFoundException, IllegalArgumentException{
                //valid code not shown
        } `,
        choice3: `B
        
        public null doStuff() throws FileNotFoundException, IllegalArgumentException{
                //valid code not shown
        } `,
        choice4: `C
        
        public doStuff() {
                //valid code not shown
        } `,
        choice5: ``,
        explination: `Answer option D is correct.
        
        A method that does not return anything should declare its return type as void.
        Note that this is different from constructors. A constructor also doesn't return anything but for a constructor, you don't specify any return type at all. That is how a constructor is differentiated from a regular method.
        
        Answer option A is incorrect. It is missing the return type. Every method must have a return type specified in its declaration.
        It could be a valid constructor though if the class is named doStuff because the constructors don't return anything, not even void.
        
        Answer option B is incorrect. null can be a return value not a return type because null is not a type.
        
        Answer option C is incorrect. This is not a valid method because there is no return type declared. Although it can be a valid constructor if the name of the class is doStuff.
        
        Answer option E is incorrect. This is not a valid method because there is no return type declared. Although it can be a valid constructor if the name of the class is doStuff.`,
    }, {
        questionNum: 1,
        questionInstructions: `Consider the following class...
        `,
        question: `class TestClass{
   int x;
   public static void main(String[] args){
  // lot of code.
   }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `D
        
        main cannot access this.x as it is declared now.`,
        choice1: `E
        
        By declaring x as private, main can access this.x`,
        choice2: `A
        
        By declaring x as static, main can access this.x`,
        choice3: `B
        
        By declaring x as public, main can access this.x`,
        choice4: `C
        
        By declaring x as protected, main can access this.x`,
        choice5: ``,
        explination: `Answer option D is correct.
        
        It is not possible to access x from main without making it static. Because main is a static method and only static members are accessible from static methods. There is no 'this' available in main so none of the this.x are valid.
        
        Because main() is a static method. It does not have 'this'!`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following are correct about "encapsulation"?
        
        Each correct answer represents a complete solution. Choose all that apply.`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `B
        
        It helps make sure that clients have no accidental dependence on the choice of representation`,
        answer2: `C
        
        It helps avoiding name clashes as internal variables are not visible outside.`,
        choice1: `A
        
        Encapsulation is same as polymorphism.`,
        choice2: `D
        
        Encapsulation makes sure that messages are sent to the right object at run time.`,
        choice3: `E
        
        Encapsulation helps you inherit the properties of another class.`,
        choice4: ``,
        choice5: ``,
        explination: `Answer options B and C are correct.
        
        Encapsulation is the technique used to package the information in such a way as to hide what should be hidden, and make visible what is intended to be visible. In simple terms, encapsulation generally means making the data variables private and providing public accessors.
        
        Answer option D is incorrect. This is dynamic binding, an outcome of polymorphism.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following options can be inserted above so that it will print 1 4 9?
        
        Each correct answer represents a complete solution. Choose all that apply.`,
        question: `interface Process{
public void process(int a, int b);
}

public class Data{
int value;
Data(int value){
this.value = value;
}
}

public void processList(ArrayList<Data> dataList, Process p){
    for(Data d: dataList){
 p.process(d.value, d.value);
    }
 }
 
 ....
 ArrayList<Data> al = new ArrayList<Data>();
 al.add(new Data(1));al.add(new Data(2));al.add(new Data(3));
 
 //INSERT METHOD CALL HERE`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `B
        
        processList(al, (int a, int b)->System.out.println(a*b) );`,
        answer2: `D
        
        processList(al, (a, b)->System.out.println(a*b));`,
        choice1: `A
        
        processList(al, a, b->System.out.println(a*b));`,
        choice2: `C
        
        processList(al, (int a, int b)->System.out.println(a*b); );`,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: `Answer options B, D are correct.
        
        There is a simple trick to identify invalid lambda constructs. When you write a lambda expression for a functional interface, you are essentially providing an implementation of the method declared in that interface but in a very consize manner.  Therefore, the lambda expression code that you write must contain all the pieces of the regular method code except the ones that the compiler can easily figure out on its own such as the parameter types, return keyword, and brackets. So, in a lambda expression, just check that all the information is there and that the expression follows the basic syntax -
        
        (parameter list) OR single_variable_without_type -> { regular lines of code } OR just_an_expression_without_semicolon
        
        For a complete discussion on this topic please see this short tutorial - http://enthuware.com/index.php/home/115
        
        It is ok to omit the parameter types in case of a functional interface because the compiler can determine the type of the parameters by looking at the interface method.
        
        If you enclose your method body within curly braces, you must write complete lines of code including the semi-colon. 
        FYI, if the method is supposed to return a value, then you must include a return statement just like you do in a regular method if you are using the curly braces syntax.
        
        Answer option A is incorrect. Observe that without the brackets over a, b, it would imply that you are trying to pass 3 arguments to processList method - a, b, and b->System.out.println(a*b), which is incorrect. You actually want to pass only two arguments - a and the lambda expression. Therefore, whenever the method of a functional interface takes more than one parameter, you need to put the arguments within brackets.
        
        If the method of a functional interface takes one parameter, you can omit the brackets. For example, x -> expression and (x) -> expression are equivalent.
        
        If the method of a functional interface takes no parameter, you must write empty brackets. For example, ( ) -> expression
        
        Answer option C is incorrect. When your method body comprises only a single expression, you must omit the semi-colon.`,
    }, {
        questionNum: 1,
        questionInstructions: `Each correct answer represents a complete solution. Choose all that apply. 
        `,
        question: `class A{
public void m1() {   }
}
class B extends A{
public void m1() {   }
}
class C extends B{
public void m1(){
    /*  //1
    ... lot of code.
    */
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `A
        
        You cannot access class A's m1() from class C for the same object ( i.e. this).`,
        answer2: `B
        
        You can access class B's m1() using super.m1() from class C.`,
        choice1: `C
        
        You can access class A's m1() using ( (A) this ).m1() from class C.`,
        choice2: `D
        
        You can access class A's m1() using super.super.m1() from class C.`,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: `Answer options A and B are correct.
        
        super.super is an invalid construct. So, there is no way you can access m1() of A from C.
        
        Answer option C is incorrect. Note that selection of method to be executed depends upon the actual object class. So no matter what you do, in class C you can only access C's m1() even by casting this to B or A. So, this option will not work.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which statement regarding the following code is correct?`,
        question: `class A{
   public int i = 10;
   private int j = 20;

}

class B extends A{
   private int i = 30; //1
   public int k = 40;

}

class C extends B{
}

public class TestClass{
   public static void main(String args[]){
      C c = new C();
      System.out.println(c.i); //2
      System.out.println(c.j); //3
      System.out.println(c.k);
   }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        The code will print 40 if //2 and //3 are commented.`,
        choice1: `A
        
        The code will print 10 and 40 if //3 is commented.`,
        choice2: `C
        
        The code will not compile because of //1.`,
        choice3: `D
        
        The code will compile if the line marked //2 is commented out.`,
        choice4: `E
        
        None of these.`,
        choice5: ``,
        explination: `Answer option B is correct.
        
        You cannot access c.i because i is private in B. But you can access ( (A)c).i because i is public in A. Remember that member variables are hidden and not overridden. So, B's i hides A's i and since B's i is private, you can't access A's i unless you cast the reference to A.
        You cannot access c.j because j is private in A.
        
        Answer option D is incorrect. Just commenting out //2 is not enough. It will still fail compilation because of //3.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following is a legal return type of a method overriding the given method:`,
        question: `public Object  myMethod() {...}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        Return type can be any class since all objects can be cast to Object.`,
        choice1: `D
        
        void`,
        choice2: `E
        
        None of these.`,
        choice3: `A
        
        Object`,
        choice4: `B
        
        String`,
        choice5: ``,
        explination: `Answer option C is correct.
        
        Version 1.5 onwards, Java allows covariant return types, which means that an overriding method can have its return type as any subclass of the return type of the overridden method.
        
        Here, since the return type of the original method is Object, the overriding method can return any object type because all classes in Java ultimately extend from Object. 
        Note that covariant return types is not applicable to primitives. So for example, if the overridden method returns int, the overriding method's return type must also be int. It cannot be short or long. It cannot even be Integer.
        
        Note that the return type cannot be a primitive such as int or char. It must be a class. So it can be Integer or Character as well.`,
    }, {
        questionNum: 1,
        questionInstructions: `You are modeling a class hierarchy for living things. You have a class LivingThing which has an abstract method reproduce().
        Now, you want to have 2 concrete subclasses of LivingThing - Plant and Animal. Both do reproduce but the mechanisms are different. What would you do?`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        Override the reproduce method in Plant and Animal classes`,
        choice1: `D
        
        Either overload or override reproduce in Plant and Animal classes, it depends on the preference of the designer.`,
        choice2: `B
        
        Overload the reproduce method in LivingThing class.`,
        choice3: `A
        
        Overload the reproduce method in Plant and Animal classes`,
        choice4: ``,
        choice5: ``,
        explination: `Answer option C is correct.
        
        This kind of scenario where the subclass HAS the behavior of the base class but implements it in a different way is called as overriding. Here, both Plant and Animal reproduce, so they have the behavior of the base class but they do it differently, so you have to override the base class method in their code. Inheritance is always involved in overriding.
        Overloading is quite different, when you want to do similar (not same) things but the inputs are different then you overload a method. For example, you may have two add methods:
        add(int i1, int i2) and add(ComplexNo c1, ComplexNo c2). Here both are doing similar things (that is why both are named as add) but inputs are different. Both are two entirely different methods and there is no inheritance involved.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following are true about the "default" constructor?
        
        Each correct answer represents a complete solution. Choose all that apply.`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `A
        
        It is provided by the compiler only if the class does not define any constructor.`,
        answer2: `C
        
        It calls the no-args constructor of the super class.`,
        choice1: `B
        
        It initializes the instance members of the class.`,
        choice2: `D
        
        It initializes instance as well as class fields of the class.`,
        choice3: `E
        
        It is provided by the compiler if the class does not define a 'no-args' constructor.`,
        choice4: ``,
        choice5: ``,
        explination: `Answer options A and C are correct.
        
        The default constructor is provided by the compiler only when a class does not define ANY constructor explicitly.
        For example,
        
        public class A{
        public A()  //This constructor is automatically inserted by the compiler because there is no other constructor defined by the programmer explicitly.{
        super();  //Note that it calls the super class' default no-args constructor.
        }
        }
        public class A{
        //Compiler will not generate any constructor because the programmer has defined a constructor.
        public A(int i){
           //do something
        }
        }
        Answer option E is incorrect. It is not provided even if the class declares any other with-args constructor.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print when run?`,
        question: `public class Noobs {
    public void m(int a){
        System.out.println("In int ");
    }
    public void m(char c){
        System.out.println("In char ");
    }
    public static void main(String[] args) {
        Noobs n = new Noobs();
        int a = 'a';
        char c = 6;
        n.m(a);
        n.m(c);
    }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `A
        
        In int
        In char`,
        choice1: `B
        
        In char
        In int`,
        choice2: `C
        
        In int
        In int`,
        choice3: `D
        
        In char
        In char`,
        choice4: `E
        
        It will not compile.`,
        choice5: ``,
        explination: `Answer option A is correct.
        
        It looks confusing but it is a simple question. Remember that whenever two methods are applicable for a method call, the one that is most specific to the argument is chosen.
        In case of m(a), a is an int, which cannot be passed as a char (because an int cannot fit into a char). Therefore, only m(int) is applicable.
        In case of m(c), c is a char, which can be passed as an int as well as a char. Therefore, both the methods are applicable. However, m(char) is most specific therefore that is chosen over m(int).`,
    }, {
        questionNum: 1,
        questionInstructions: `An abstract method cannot be overridden.`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        False`,
        choice1: `A
        
        True`,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: `Answer option B is correct.
        
        Abstract methods are meant to be overridden in the subclass. Abstract methods describe a behavior but do not implement it. So the subclasses have to override it to actually implement the behavior. A subclass may chose not to override it, in which case, the subclass will have to be abstract too.`,
    }, {
        questionNum: 1,
        questionInstructions: `Consider the following program... Which of the following statements are correct?
        `,
        question: `class Super {  }
class Sub extends Super {  }
public class TestClass{
public static void main(String[] args){
    Super s1 = new Super(); //1
    Sub s2 = new Sub();     //2
    s1 = (Super) s2;        //3
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `A
        
        It will compile and run without any problems.`,
        choice1: `B
        
        It will compile but WILL throw ClassCastException at runtime.`,
        choice2: `C
        
        It will compile but MAY throw ClassCastException at runtime.`,
        choice3: `D
        
        It will not compile.`,
        choice4: `E
        
        None of these.
        `,
        choice5: ``,
        explination: `Answer option A is correct.
        
        Note that s2 is a variable of class Sub, which is a subclass of Super. s1 is a variable of class Super. A subclass can ALWAYS be assigned to a super class variable without any cast. It will always compile and run without any exception.
        
        For example, a Dog  "IS A" Animal, so you don't need to cast it.
        But an Animal may not always be a Dog. So you need to cast it to make it compile and during the runtime the actual object referenced by animal should be a Dog  otherwise it will throw a ClassCastException.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of these statements concerning interfaces are true?
        
        Each correct answer represents a complete solution. Choose all that apply.`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `A
        
        An interface may extend an interface.`,
        answer2: `C
        
        A class can implement an interface and extend a class.`,
        choice1: `B
        
        An interface may extend a class and may implement an interface.`,
        choice2: `D
        
        A class can extend an interface and can implement a class.`,
        choice3: `E
        
        An interface can only be implemented and cannot be extended.`,
        choice4: ``,
        choice5: ``,
        explination: `Answer options A and C are correct.
        
        The keyword implements is used when a class inherits method prototypes from an interface. The keyword extends is used when an interface inherits from another interface, or a class inherits from another class.
        
        Unlike a class, an interface can extend from multiple interfaces.
        
        Answer option B is incorrect. An interface cannot implement another interface. It can extend another interface but not a class.
        
        Answer option E is incorrect. It can be extended by another interface.`,
    }, {
        questionNum: 1,
        questionInstructions: `Identify the correct statement(s).`,
        question: `//in file Movable.java
package p1;
public interface Movable {
  int location = 0;
  void move(int by);
  public void moveBack(int by);
}

//in file Donkey.java
package p2;
import p1.Movable;
public class Donkey implements Movable{
    int location = 200;
    public void move(int by) {
        location = location+by;
    }
    public void moveBack(int by) {
        location = location-by;
    }
}

//in file TestClass.java
package px;
import p1.Movable;
import p2.Donkey;
public class TestClass {
    public static void main(String[] args) {
        Movable m = new Donkey();
        m.move(10);
        m.moveBack(20);
        System.out.println(m.location);
    }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `E
        
        It will print 0 when TestClass is run.`,
        choice1: `D
        
        It will print 190 when TestClass is run.`,
        choice2: `C
        
        Movable.java will not compile.`,
        choice3: `B
        
        TestClass.java will not compile.`,
        choice4: `A
        
        Donkey.java will not compile.`,
        choice5: ``,
        explination: `Answer option E is correct.
        
        There is no problem with the code. All variables in an interface are implicitly static and final. All methods in an interface are public. There is no need to define them so explicitly. Therefore, the location variable in Movable is static and the move() method is public.
        
        Now, when you call m.move(10) and m.moveBank(20), the instance member location of Donkey is updated to 190 because  the reference m refers to a Donkey at run time and so move and moveBack methods of Donkey are invoked at runtime. However, when you print m.location, it is the Movable's location (which is never updated) that is printed.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will happen when the above code is compiled and run?`,
        question: `public class Sample implements IInt{
   public static void main(String[] args){
      Sample s = new Sample();  //1
      int j = s.thevalue;       //2
      int k = IInt.thevalue;    //3
      int l = thevalue;         //4
   }
}
public interface IInt{
      int thevalue = 0;
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `E
        
        It will compile and run without any problem.`,
        choice1: `D
        
        It will give an error at compile time at line //4.`,
        choice2: `C
        
        It will give an error at compile time at line //3`,
        choice3: `B
        
        It will give an error at compile time at line //2.`,
        choice4: `A
        
        It will give an error at compile time at line //1.`,
        choice5: ``,
        explination: `Answer option E is correct.
        
        As a rule, fields defined in an interface are public, static, and final. The methods are public.
        Here, the interface IInt defines thevalue and thus any class that implements this interface gets this field. Therefore, it can be accessed using s.thevalue or just thevalue inside the class. Also, since it is static, it can also be accessed using IInt.thevalue or Sample.thevalue.`,
    }, {
        questionNum: 1,
        questionInstructions: `Which of the following statements are true?`,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        For any non-null reference o1, the expression (o1 instanceof Object) will always yield true.`,
        choice1: `A
        
        For any non-null reference o1, the expression (o1 instanceof o1) will always yield true.`,
        choice2: `E
        
        None of these.`,
        choice3: `D
        
        For any non-null reference o1, the expression (o1 instanceof Object) may yield false.`,
        choice4: `C
        
        For any non-null reference o1, the expression (o1 instanceof o1) will always yield false.`,
        choice5: ``,
        explination: `Answer option B is correct.
        
        You should understand here that instanceof operator returns true even if the Right Hand Side is a super class.
        For example,
          class Animal {}
          class Dog extends Animal { }
          Dog d = new Dog();
        Now, d instanceof Animal will be true because even though d is actually an instance of Dog, since Dog is a subclass of Animal, Dog IS-A Animal.
        
        Because all objects in Java derive from Object class.
        
        Answer option A is incorrect. instanceof operator does not accept objects as the right hand side operand. The operand at the right hand side should be a class. Therefore, this expression will not compile.
        
        Answer option C is incorrect. It is wrong for the same reason as option 1.
        
        Answer option D is incorrect. Since all objects in Java derive from Object class, there is no way it will ever return false.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will be the output when class Test is run?`,
        question: `class Super { static String ID = "QBANK"; }

class Sub extends Super{
static { System.out.print("In Sub"); }
}
public class Test{
public static void main(String[] args){
    System.out.println(Sub.ID);
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        It will print QBANK.`,
        choice1: `A
        
        It will print In Sub and QBANK.`,
        choice2: `C
        
        Depends on the implementation of JVM.
        `,
        choice3: `D
        
        It will not even compile.`,
        choice4: `E
        
        None of these.`,
        choice5: ``,
        explination: `Answer option B is correct.
        
        As per Section 12.4.1 given here: http://docs.oracle.com/javase/specs/jls/se7/html/jls-12.html
        
        A class or interface type T will be initialized immediately before the first occurrence of any one of the following:
        
        T is a class and an instance of T is created.
        
        T is a class and a static method declared by T is invoked.
        
        A static field declared by T is assigned.
        
        A static field declared by T is used and the field is not a constant variable ( 4.12.4).
        
        T is a top level class ( 7.6), and an assert statement ( 14.10) lexically nested within T ( 8.1.3) is executed.
        
        A reference to a static field ( 8.3.1.1) causes initialization of only the class or interface that actually declares it, even though it might be referred to through the name of a subclass, a subinterface, or a class that implements an interface.
        
        Invocation of certain reflective methods in class Class and in package java.lang.reflect also causes class or interface initialization.
        
        A class or interface will not be initialized under any other circumstance.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will be the output when the following program is run?`,
        question: `package exceptions;
public class TestClass{
    public static void main(String[] args) {
        try{
            hello();
        }
        catch(MyException me){
            System.out.println(me);
        }
    }
    
    static void hello() throws MyException{
        int[] dear = new int[7];
        dear[0] = 747;
        foo();
    }
    
    static void foo() throws MyException{
        throw new MyException("Exception from foo");
    }
}
class MyException extends Exception {
    public MyException(String msg){
        super(msg);
    }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        exceptions.MyException: Exception from foo`,
        choice1: `D
        
        exceptions.MyException: Exception from foo
                at exceptions.TestClass.foo(TestClass.java:29)
                at exceptions.TestClass.hello(TestClass.java:25)
                at exceptions.TestClass.main(TestClass.java:14)`,
        choice2: `A
        
        Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 10
                at exceptions.TestClass.doTest(TestClass.java:24)
                at exceptions.TestClass.main(TestClass.java:14)`,
        choice3: `B
        
        Error in thread "main" java.lang.ArrayIndexOutOfBoundsException`,
        choice4: ``,
        choice5: ``,
        explination: `Answer option C is correct.
        
        Note that there are a few questions in the exam that test your knowledge about how exception messages are printed.
        
        When you use System.out.println(exception), a stack trace is not printed. Just the name of the exception class and the message is printed.
        When you use exception.printStackTrace(), a complete chain of the names of the methods called, along with the line numbers, is printed. It contains the names of the methods in the chain of method calls that led to the place where the exception was created going back up to the point where the thread, in which the exception was created, was started. 
        
        Answer option A is incorrect. You are creating an array of length 7. Since array numbering starts with 0, the first element would be array[0]. So ArrayIndexOutOfBoundsException will NOT be thrown.
        
        Answer option B is incorrect. java.lang.ArrayIndexOutOfBoundsException extends java.lang.RuntimeException, which in turn extends java.lang.Exception. Therefore, ArrayIndexOutOfBoundsException is an Exception and not an Error.
        
        Answer option D is incorrect. me.printStackTrace() would have produced this output.
        `,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following program print when run?`,
        question: `public class TestClass{
  public static void main(String[] args){
  try{
System.exit(0);
  }
  finally{
 System.out.println("finally is always executed!");
  }
  }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        It will not print anything.`,
        choice1: `D
        
        An exception will be thrown`,
        choice2: `E
        
        None of these.`,
        choice3: `B
        
        It will not compile as there is no catch block.`,
        choice4: `A
        
        It will print "finally is always executed!"`,
        choice5: ``,
        explination: `Answer option C is correct.
        
        finally is always executed (even if you throw an exception in try or catch) but this is the exception to the rule.
        When you call System.exit(...); The JVM exits so there is no way to execute the finally block.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print when run?`,
        question: `public class Test{
static String j = "";
public static void method( int i){
  try{
if(i == 2){
  throw new Exception();
}
j += "1";
  }
  catch (Exception e){
j += "2";
return;
  }
  finally{
j += "3";
  }
  j += "4";
}
public static void main(String args[]){
  method(1);
  method(2);
  System.out.println(j);
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `B
        
        13423`,
        choice1: `A
        
        13432`,
        choice2: `C
        
        14324`,
        choice3: `D
        
        12434`,
        choice4: `E
        
        12342`,
        choice5: ``,
        explination: `Answer option B is correct.
        
        Try to follow the flow of control :
        in method(1) : i is not 2 so, j gets "1" then finally is executed which makes j = "13" and then the last statement (j +=4) is executed which makes j = "134".
        in method(2) : i is 2, so it goes in the if block which throws an exception. So none of the statements of try block are executed and control goes to catch which makes j = "1342", then finally makes j = "13423" and the control is returned. Note that the last statement ( j+=4) is not executed as there was an exception thrown in the try block, which cause the control to go to the catch block, which in turn has a return.`,
    }, {
        questionNum: 1,
        questionInstructions: ` Question 71 : What will happen when the following code is compiled and run?`,
        question: `class AX{
  static int[] x = new int[0];
  static{
x[0] = 10;
  }
  public static void main(String[] args){
 AX ax = new AX();
  }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        It will throw ExceptionInInitializerError at runtime.`,
        choice1: `D
        
        It will not compile.`,
        choice2: `A
        
        It will throw NullPointerException at runtime.`,
        choice3: `B
        
        It will throw ArrayIndexOutOfBoundsException at runtime.`,
        choice4: ``,
        choice5: ``,
        explination: `Answer option C is correct.
        
        Even though the line x[0] = 10; will throw java.lang.ArrayIndexOutOfBoundsException, JVM will wrap it and rethrow java.lang.ExceptionInInitializerError.
        
        The following is the output when the program is run:
        
        java.lang.ExceptionInInitializerError
        Caused by: java.lang.ArrayIndexOutOfBoundsException: 0
        at AX.<clinit>(SM.java:6)
        Exception in thread "main"
        Java Result: 1
        
        Note that the program ends with ExceptionInInitializerError because any exception thrown in a static block is wrapped into ExceptionInInitializerError and then that ExceptionInInitializerError is thrown. Remember that a static or instance initializer can only throw a RuntimeException. If you try to throw a checked exception from a static or instance initializer block to the outside, the code will not compile.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will be the result of attempting to compile and run the following program?`,
        question: `public class TestClass{
public static void main(String args[]){
Exception e = null;
throw e;
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `A
        
        The code will fail to compile.`,
        choice1: `B
        
        The program will fail to compile, since it cannot throw a null.`,
        choice2: `C
        
        The program will compile without error and will throw an Exception when run.`,
        choice3: `D
        
        The program will compile without error and will throw java.lang.NullPointerException when run`,
        choice4: `E
        
        The program will compile without error and will run and terminate without any output.`,
        choice5: ``,
        explination: `Answer option A is correct.
        
        You are throwing an exception and there is no try or catch block, or a throws clause. So it will not compile.
        If you either put a try catch block or declare a throws clause for the method then it will throw a NullPointerException at run time because e is null.
        A method that throws a 'checked' exception i.e. an exception that is not a subclass of Error or RuntimeException, either must declare it in throws clause or put the code that throws the exception in a try/catch block.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will be the output when the following program is run?`,
        question: `package exceptions;
public class TestClass {
 public static void main(String[] args) {
try{
 doTest();
}
catch(MyException me){
 System.out.println(me);
}
 }
 
 static void doTest() throws MyException{
int[] array = new int[10];
array[10] = 1000;
doAnotherTest();
 }
 
 static void doAnotherTest() throws MyException{
throw new MyException("Exception from doAnotherTest");
 }
}
class MyException extends Exception {
 public MyException(String msg){
  super(msg);
 }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: `A
        
        Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 10
                at exceptions.TestClass.doTest(TestClass.java:24)
                at exceptions.TestClass.main(TestClass.java:14)`,
        answer2: `B
        
        Error in thread "main" java.lang.ArrayIndexOutOfBoundsException`,
        choice1: `C
        
        exceptions.MyException: Exception from doAnotherTest`,
        choice2: `D
        
        exceptions.MyException: Exception from doAnotherTest
                at exceptions.TestClass.doAnotherTest(TestClass.java:29)
                at exceptions.TestClass.doTest(TestClass.java:25)
                at exceptions.TestClass.main(TestClass.java:14)`,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: `Answer option A is correct.
        
        Note that there are a few questions in the exam that test your knowledge about how exception messages are printed.
        
        When you use System.out.println(exception), a stack trace is not printed. Just the name of the exception class and the message is printed.
        When you use exception.printStackTrace(), a complete chain of the names of the methods called, along with the line numbers, is printed. It contains the names of the methods in the chain of method calls that led to the place where the exception was created going back up to the point where the thread, in which the exception was created, was started. 
        
        You are creating an array of length 10. Since array numbering starts with 0, the last element would be array[9].
        array[10] would be outside the range of the array and therefore an ArrayIndexOutOfBoundsException will be thrown, which cannot be caught by catch(MyException ) clause.
        The exception is thus thrown out of the main method and is handled by the JVM's uncaught exception handling mechanism, which prints the stack trace.
        
        Answer option B is incorrect. java.lang.ArrayIndexOutOfBoundsException extends java.lang.RuntimeException, which in turn extends java.lang.Exception.
        Therefore, ArrayIndexOutOfBoundsException is an Exception and not an Error.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will be the result of compiling and running the following program?
        `,
        question: `class NewException extends Exception {}
class AnotherException extends Exception {}
public class ExceptionTest{
public static void main(String [] args) throws Exception{
try{
 m2();
}
finally{ m3(); }
 }
 public static void m2() throws NewException{  throw new NewException();  }
 public static void m3() throws AnotherException{  throw new AnotherException();  }
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `A
        
        It will compile but will throw AnotherException when run.`,
        choice1: `B
        
        It will compile but will throw NewException when run.`,
        choice2: `C
        
        It will compile and run without throwing any exceptions.`,
        choice3: `D
        
        It will not compile.`,
        choice4: `E
        
        None of these.`,
        choice5: ``,
        explination: `Answer option A is correct.
        
        m2() throws NewException, which is not caught anywhere. But before exiting out of the main method, finally must be executed. Since finally throw AnotherException (due to a call to m3() ), the NewException thrown in the try block ( due to call to m2() ) is ignored and AnotherException is thrown from the main method.`,
    }, {
        questionNum: 1,
        questionInstructions: `What will the following code print when compiled and run?`,
        question: `abstract class Calculator{
abstract void calculate();
public static void main(String[] args){
System.out.println("calculating");
Calculator x = null;
x.calculate();
}
}`,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: `C
        
        It will print calculating and then throw NullPointerException.`,
        choice1: `D
        
        It will print calculating and will throw NoSuchMethodError`,
        choice2: `E
        
        It will print calculating and will throw MethodNotImplementedException
        `,
        choice3: `A
        
        It will not compile.`,
        choice4: `B
        
        It will not print anything and will throw NullPointerException`,
        choice5: ``,
        explination: `Answer option C is correct.
        
        After printing, when it tries to call calculate() on x, it will throw NullPointerException since x is null.
        
        Answer option A is incorrect. It will compile without any issue.`,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }, {
        questionNum: 1,
        questionInstructions: ``,
        question: ``,
        answer: ``,
        timeCorrect: 0,
        questionLanguage: 'java',
        answer1: ``,
        answer2: ``,
        choice1: ``,
        choice2: ``,
        choice3: ``,
        choice4: ``,
        choice5: ``,
        explination: ``,
    }
]