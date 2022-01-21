module.exports = {
    base_url: "http://www.maxvdw.ovh/open-planner-docs/",
    seed: "telescope",

    folders: {
        dist: "dist",
        data: "data",
        ressources: "data/ressources",
        tags: "data/tags",
        authors: "data/authors",
    },

    labels: {
        project_title: "Documentation d'Open Planner",
        see_also: "Voir aussi",
        search: "Recherche",
        tags: "Mots-clés",
        authors: "Auteurs",
    },

    graph: {
        node_min_size: 5,
        node_max_size: 25,
    },

    hide_isolated_tags: true,
    isolated_tags_threshold: 2,
};
