package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.model.Country;
import com.cognizant.spring_learn.model.CountryList;
import org.springframework.stereotype.Service;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.Unmarshaller;
import jakarta.annotation.PostConstruct;


import java.io.InputStream;
import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    private List<Country> countryList;

    @PostConstruct
    public void loadCountries() throws Exception {
        InputStream inputStream = getClass().getResourceAsStream("/country.xml");
        JAXBContext context = JAXBContext.newInstance(CountryList.class);
        Unmarshaller unmarshaller = context.createUnmarshaller();
        CountryList countries = (CountryList) unmarshaller.unmarshal(inputStream);
        countryList = countries.getCountryList();
    }

    public Country getCountry(String code) {
        Optional<Country> country = countryList.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst();

        return country.orElse(null); // or throw custom exception
    }
}
