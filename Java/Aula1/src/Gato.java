public class Gato {

    private String pelo;
    private Integer idade;

    @Override
    public String toString() {
        return "Gato{" +
                "pelo='" + pelo + '\'' +
                ", idade=" + idade +
                '}';
    }

    public String getPelo() {
        return pelo;
    }

    public void setPelo(String pelo) {
        this.pelo = pelo;
    }

    public Integer getIdade() {
        return idade;
    }

    public void setIdade(Integer idade) {
        this.idade = idade;
    }
}
