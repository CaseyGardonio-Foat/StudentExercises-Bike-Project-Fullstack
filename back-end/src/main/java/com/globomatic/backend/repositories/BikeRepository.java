package com.globomatic.backend.repositories;

import com.globomatic.backend.models.Bike;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BikeRepository extends JpaRepository<Bike, Long> {
}
