class Main { 
    public static void main(String[] args) {
           
        var dimas = new Person();
        dimas.name = "Dimas";

        System.out.println(dimas.name);

        for( int i = 0 ; i < 10; i ++){
            hello();
        }
    }

    public static void hello() { 
        System.out.println("hello world");
    }

}

class Person { 
    String name = "";
    Integer age = 0;
}