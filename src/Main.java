import entity.Pessoa;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        List<Pessoa> masculinas = new ArrayList<>();
        List<Pessoa> femininas = new ArrayList<>();
        List<Pessoa> todasPessoas = new ArrayList<>();


        Locale.setDefault(Locale.US);
        Scanner scanner = new Scanner(System.in);

        for (int i = 0; i < 15; i++) {

            System.out.println("escreva o nome da pessoa:  ");
            String nome = scanner.nextLine();

            System.out.println("escreva o gênero da pessoa:  ");
            String genero = scanner.nextLine();

            System.out.println("escreva a altura da pessoa: ");
            double altura = scanner.nextDouble();
            scanner.nextLine();

            Pessoa pessoa = new Pessoa(nome, genero, altura);
            todasPessoas.add(pessoa);


            if (pessoa.getGenero().equals("masculino")) {
                masculinas.add(pessoa);
            }

            if (pessoa.getGenero().equals("feminino")) {
                femininas.add(pessoa);
            }

        }
        scanner.close();

        System.out.println("a maior altura do grupo é: " + verificarMaiorAltura(todasPessoas));
        System.out.println();
        System.out.println("a media de altura no gênero masculino é: " + mediaAltura(masculinas));
        System.out.println();
        System.out.println("o número de pessoas do gênero feminino é: " + femininas.size());


    }

    public static double verificarMaiorAltura(List<Pessoa> pessoas) {
        double maiorAltura = 0;
        for (Pessoa p : pessoas) {
            if (p.getAltura() > maiorAltura) {
                maiorAltura = p.getAltura();
            }
        }
        return maiorAltura;
    }

    public static double mediaAltura(List<Pessoa> pessoas) {
        double soma = 0;
        double media = 0;

        for (Pessoa p : pessoas) {
            soma += p.getAltura();
        }
        media = soma / pessoas.size();
        return media;

    }

}