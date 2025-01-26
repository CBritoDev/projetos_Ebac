$(document).ready(function(){
    
    $('form').on('submit',function(e){
        e.preventDefault()
        criaNovoItem()
    })
    
    $(document).on('click', '#lista-tarefas li', function(e){
        e.preventDefault()
        $(this).toggleClass('selecionada')
    })

    $('#botao-exclui-tarefa').click(function(){
        $('#lista-tarefas li.selecionada').slideUp(function(){
            $(this).remove()
        })
    })

    function criaNovoItem(){
        const tarefaAdicionada = $('#tarefa').val()
        const selecionaCor = $('input[name="categoria-tarefa"]:checked').val()

        if(tarefaAdicionada !== "" && selecionaCor){
            const novaTarefa = $('<li></li>').text(tarefaAdicionada).css('background-color', selecionaCor)
            $(novaTarefa).appendTo('#lista-tarefas ul')
            $('#tarefa').val('')
            if ($('#lista-tarefas').is(':hidden')) {
                $('#lista-tarefas').slideDown();
            }else{
                novaTarefa.hide().slideDown()
            }
        }else{
            alert('Selecione uma cor')
        }
    }
})