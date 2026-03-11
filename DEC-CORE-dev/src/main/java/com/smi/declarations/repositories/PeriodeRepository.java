package com.smi.declarations.repositories;

import com.smi.declarations.entities.Periode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PeriodeRepository extends JpaRepository<Periode, Long> {
    List<Periode> findByTypePeriode(Periode.TypePeriod typePeriode);
}
