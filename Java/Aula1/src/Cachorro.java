public class Cachorro {

    String FormatoRabo;

    Integer qtdePatas;

    String cor;

    String nome;

    public String fazerBarulho(){
        return "auauauau";
    }
    public String Comer(){
        return "ração";
    }
    @Override
    public String toString() {
        return "Cachorro{" +
                "FormatoRabo='" + FormatoRabo + '\'' +
                ", qtdePatas=" + qtdePatas +
                ", cor='" + cor + '\'' +
                ", nome='" + nome + '\'' +
                '}';
    }
}
