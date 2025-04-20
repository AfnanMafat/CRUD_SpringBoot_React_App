package com.crud.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(long id, String username, String name, String email) {
		super();
		this.id = id;
		this.username = username;
		this.name = name;
		this.email = email;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", username=" + username + ", name=" + name + ", email=" + email + "]";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	private String username;
	private String name;
	private String email;

}
