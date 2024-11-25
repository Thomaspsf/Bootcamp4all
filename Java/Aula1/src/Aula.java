public class Aula {
    public static void main(String[] args) {
        // acesso publico na class não fazer
        Cachorro cao = new Cachorro();
        cao.nome = "Luke";
        cao.cor = "Caramelo";
        cao.qtdePatas = 4;
        cao.FormatoRabo = "curto";

        System.out.println(cao.fazerBarulho());

        System.out.println(cao.Comer());

        System.out.println("Primeiro objeto: " + cao);

        // encapsulado
        Gato miau = new Gato();

        miau.setPelo("liso");
        miau.setIdade(6);

        System.out.println("gato: " + miau);
    }
}
