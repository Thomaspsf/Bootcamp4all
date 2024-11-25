import java.util.Scanner;

public class HelloWorld {
    //    public static void main(String[] args) {
//
//        Scanner scanner = new Scanner(System.in);
//        System.out.println("Digite um numero: ");
//        int num = scanner.nextInt();
//        System.out.println("Digite um numero: ");
//        int num2 = scanner.nextInt();
//        int soma = (num + num2);
//        if (soma > 10){
//            System.out.println("soma maior " + soma);
//        } else {
//            System.out.println("soma menor " + soma);
//        }
//    }
    //laço de repetição
//    public static void main(String[] args) {
//        for (int x = 1; x <= 10; x++) {
//            System.out.println(x);
//        }
//    }
//    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);
//        System.out.println("sigine um numero: ");
//        int num = scanner.nextInt();
//        for (int x = 1; x <= num; x++) {
//            System.out.println(x);
//       }
//    }
//    public static void main(String[] args) {
//        Scanner scanner = new Scanner(System.in);
//        System.out.println("Digite um numero: ");
//        int num = scanner.nextInt();
//        if (num < 10) {
//            for (int x = 1; x <= num; x++) {
//                if (x <= 10) {
//                    System.out.println(x);
//                }
//            }
//        } else {
//            System.out.println("para calcular tem que ser menor de 10");
//        }
//    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite um numero: ");
        int num = scanner.nextInt();

        for (int x = 1; x <= num; x++) {
            if (x <= 10) {
                if (x % 2 == 0) {
                    System.out.println(x);
                }
            } else {
                System.out.println("para calcular tem que ser menor de 10");
                break;

            }

        }
    }
}