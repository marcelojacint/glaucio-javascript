package entity;

import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

public class Pessoa {

    private String nome;
    private String genero;
    private double altura;


    public Pessoa(String nome, String genero, double altura) {
        this.nome = nome;
        this.genero = genero;
        this.altura = altura;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public double getAltura() {
        return altura;
    }

    public void setAltura(double altura) {
        this.altura = altura;
    }



}
